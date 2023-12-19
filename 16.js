function transformTree(tree) {
  const visitNode = (nodeIndex) => {
    if (nodeIndex < tree.length && tree[nodeIndex] !== null) {
      const value = tree[nodeIndex]
      const left = visitNode(2 * nodeIndex + 1)
      const right = visitNode(2 * nodeIndex + 2)

      return { value, left, right }
    }

    return null
  }

  const transformedTree = visitNode(0)
  return transformedTree
}
