<template>
  <page-container title="Version" sub-title="show current project dependencies">
    <template #content>
      <strong>Content Area</strong>
    </template>
    <template #extra>
      <strong>Extra Area</strong>
    </template>
    <template #extraContent>
      <strong>ExtraContent Area</strong>
    </template>
    <template #tags>
      <a-tag>Tag1</a-tag>
      <a-tag color="pink">Tag2</a-tag>
    </template>
    <a-card title="Project">
      <a-transfer
        v-model:target-keys="targetKeys"
        :data-source="dataSource"
        :render="item => item.title"
        :show-select-all="false"
      >
        <template #children="{ direction, selectedKeys, onItemSelect }">
          <a-tree
            v-if="direction === 'left'"
            block-node
            checkable
            default-expand-all
            :checked-keys="[...selectedKeys, ...targetKeys]"
            :tree-data="treeData"
            :height="300"
            @check="
              (_, props) => {
                onChecked(props, [...selectedKeys, ...targetKeys], onItemSelect)
              }
            "
            @select="
              (_, props) => {
                onChecked(props, [...selectedKeys, ...targetKeys], onItemSelect)
              }
            "
          />
          <a-tree
            v-else
            block-node
            checkable
            default-expand-all
            :checked-keys="[]"
            :height="300"
            @check="
              (_, props) => {
                onChecked(props, [...selectedKeys, ...targetKeys], onItemSelect)
              }
            "
            @select="
              (_, props) => {
                onChecked(props, [...selectedKeys, ...targetKeys], onItemSelect)
              }
            "
          />
        </template>
      </a-transfer>
    </a-card>
  </page-container>
</template>

<script lang="ts" setup>
import type { TransferProps, TreeProps } from 'ant-design-vue'

type TreeNode = {
  title: string
  key: string
  children?: TreeNode[]
}

function dig(path = '0', level = 3): TreeNode[] {
  const list = []
  for (let i = 0; i < 10; i += 1) {
    const key = `${path}-${i}`
    const treeNode: TreeNode = {
      title: key,
      key,
    }

    if (level > 0) {
      treeNode.children = dig(key, level - 1)
    }

    list.push(treeNode)
  }
  return list
}

const treeData = dig()

const dataSource: TransferProps['dataSource'] = []

function flatten(list: TransferProps['dataSource'] = []) {
  list.forEach(item => {
    dataSource!.push(item)
    flatten(item.children)
  })
}

flatten(treeData)

const targetKeys = ref<string[]>([])

function isChecked(selectedKeys: (string | number)[], eventKey: string | number | undefined) {
  return selectedKeys.indexOf(eventKey) !== -1
}

const onChecked = (
  e: any, // Parameters<TreeProps['onCheck']>[1] | Parameters<TreeProps['onSelect']>[1],
  checkedKeys: string[],
  onItemSelect: (n: any, c: boolean) => void,
) => {
  const { eventKey } = e.node
  onItemSelect(eventKey, !isChecked(checkedKeys, eventKey))
}
</script>
