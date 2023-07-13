class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function str2tree(s) {
  if (s.length === 0) {
    return null;
  }

  let i = 0;
  while (i < s.length && s[i] !== "(") {
    i++;
  }
  const rootVal = parseInt(s.substring(0, i));
  const root = new TreeNode(rootVal);

  let start = i;
  let leftCount = 0;
  for (let j = start; j < s.length; j++) {
    if (s[j] === "(") {
      leftCount++;
    } else if (s[j] === ")") {
      leftCount--;
    }

    if (leftCount === 0 && start === i) {
      root.left = str2tree(s.substring(start + 1, j));
      start = j + 1;
    }
  }

  if (start < s.length - 1) {
    root.right = str2tree(s.substring(start + 1, s.length - 1));
  }

  return root;
}

function inorderTraversal(root) {
  const result = [];

  function traverse(node) {
    if (node === null) {
      return;
    }

    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }

  traverse(root);

  return result;
}

const s = "4(2(3)(1))(6(5))";
const root = str2tree(s);
const inorder = inorderTraversal(root);
console.log(inorder); // Output: [4, 2, 3, 1, 6, 5]
