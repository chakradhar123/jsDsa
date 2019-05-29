class Graph{
    constructor(){
        this.adjacencyList={};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
        this.adjacencyList[vertex]=[];
        }
    }
    addEdge(v1,v2){
        //assuming undirected graph
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1,v2){
        //assuming undirected graph
        this.adjacencyList[v1]=this.adjacencyList[v1].filter(v => v!==v2);
        this.adjacencyList[v2]=this.adjacencyList[v2].filter(v => v!==v1);
    }
    removeVertex(vertex){
        while(this.adjacencyList.length){
        let adjacentVertex=this.adjacencyList[vertex].pop();
        this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    depthFirstRecursive(start){
        const result=[];
        const visited={};
        //we cant do this.adjaencyList inside the function
        //because this keyword inside the function refers to //that function so we define it earlier itself
        const adjacencyList=this.adjacencyList;

        function dfs(vertex){
            if(!vertex){
                return null;
            }
                visited[vertex]=true;
                result.push(vertex);
                adjacencyList[vertex].forEach(neighbour => {
                    if(!visited[neighbour]){
                        return dfs(neighbour);
                    }
                });

            
        }
        dfs(start);
        return result;

    }
    depthFirstIterative(start){
        const stack=[start];
        const result=[];
        const visited={};
        let currentVertex;
        visited[start]=true;
        while(stack.length){
            currentVertex=stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                visited[neighbour]=true;
                stack.push(neighbour);
                }
            });
        }
        return result;
    }
    breadthFirstSearch(start){
        const queue=[start];
        const result=[];
        const visited={};
        visited[start]=true;
        let currentVertex;
        while(queue.length){
            currentVertex=queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour]=true;
                    queue.push(neighbour);
                }
            });
        }
        return result;
    }
}