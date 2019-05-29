class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }

    insert(value){
        let newNode=new Node(value);
        if(!this.root){
            this.root=newNode;
            return this;
        }
        let current=this.root;
        while(true){
            if(value===current.value){
                return undefined;
            }
            if(value<current.value){
                if(current.left===null){
                    current.left=newNode;
                    return this;
                }
                else{
                    current=current.left;
                }
            }
            else if(value>current.value){
                if(current.right===null){
                    current.right=newNode;
                    return this;
                }
                else{
                    current=current.right;
                }
            }
        }

    }

    find(value){
        if(!this.root){
            return undefined;
        }
        let current=this.root;
        while(true){
            if(value===current.value){
                return current;
            }
            if(value<current.value){
                if(current.left===null){
                    return undefined;
                }
                else{
                    curent=current.left;
                }
            }
            else if(value>current.value){
                if(current.right===null){
                    return undefined;
                }
                else{
                    current=current.right;
                }
            }
        }
    }
}