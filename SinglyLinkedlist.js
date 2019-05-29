class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.length=0;
        this.head=null;
        this.tail=null;
    }
    push(val){
        let newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
           
        }
        else{

            this.tail.next=newNode;
            this.tail=newNode;
        }
         this.length++;
         return this;
    }
    pop(){
        if(!this.head){
            return undefined;
        }

        let current=this.head;
        let newTail=current;
        while(current.next){
            newTail=current;
            current=current.next;
        }
        this.tail=newTail;
        this.tail.next=null;
        this.length--;
        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        return current;
    }

    shift(){
        if(!this.head){
            return undefined;
        }
        let currentHead=this.head;
        this.head=this.head.next;
        this.length--;
        if(this.length===0){
            this.tail=null;
        }
        return currentHead;

    }
    unShift(val){
        let newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            newNode.next=this.head;
            this.head=newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index<0||index>=this.length){
            return null;
        }
        let counter=0;
        let current=this.head;
        while(counter!==index){
            current=current.next;
            counter++;
        }
        return current;
        
        
    }
    set(index,val){
        let foundNode=this.get(index);
        if(foundNode){
            foundNode.val=val;
            return true
        }
        return false;
    }

    insert(index,val){
        if(index<0||index>this.length){
            return false;
        }
        else if(index===this.length){
            this.push(val);
        }
        else if(index===0){
            this.unShift(val);
        }
        else{
            let previous=this.get(index-1);
            let newNode=new Node(val);
            newNode.next=previous.next;
            previous.next=newNode;
            this.length++;
        }
        return true;
    }

    remove(index){
        if(index<0||index>=this.length){
            return undefined;
        }
        else if(index===this.length-1){
            return this.pop();
        }
        else if(index===0){
            return this.shift();
        }
        else{
            let previous=this.get(index-1);
            let removed=previous.next;
            previous.next=removed.next;
            this.length--;
            return removed;
        }
        
    }

    print(){
        let current=this.head;
        while(current){
            console.log(current);
            current=current.next;
        }
    }

    reverse(){
        let node=this.head;
        this.head=this.tail;
        this.tail=node;
        let prev=null;
        let next;
        for(let i=0;i<this.length;i++){
            next=node.next;
            node.next=prev;
            prev=node;
            node=next;
        }
        return this;
    }
}

