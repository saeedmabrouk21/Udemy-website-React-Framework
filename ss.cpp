stack<TreeNode*>a;
stack<TreeNode*>b;
TreeNode* ptr1=root;
TreeNode* ptr2=root;
a.push(ptr1);
b.push(ptr2);
while(ptr1->right){
    ptr1=ptr1->right;
    a.push(ptr1);
}
while(ptr2->left){
    ptr2=ptr2->left;
    b.push(ptr2);
}
while(!a.empty()&&!b.empty()){
    if(ptr1->val+ptr2->val==target)
        return true;
    if(ptr1->val+ptr2->val > target){
        if(a.top()->left){
            TreeNode* c=a.top()->left;
            a.pop();
            a.push(c);
        }else{
            a.pop();
        }
    }else{
        if(b.top()->right){
            TreeNode* c=b.top()->right;
            b.pop();
            b.push(c);
        }else{
            b.pop();
        }
    }
}
return false;