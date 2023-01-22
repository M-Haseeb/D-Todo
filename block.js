var connector=document.getElementById("connector");

connector.addEventListener("click", async ()=>{
    if(window.ethereum !== "undefined"){
        const accounts=await ethereum.request({method:"eth_requestAccounts"});
        const account=accounts[0];
        connector.innerHTML="Connected";
        console.log(account);
    }
    else{
        alert("Install Meta Mask Chrome Extension!");
    }
    const abi=[
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "taskText",
                    "type": "string"
                },
                {
                    "internalType": "bool",
                    "name": "isDeleted",
                    "type": "bool"
                }
            ],
            "name": "addTask",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "taskId",
                    "type": "uint256"
                }
            ],
            "name": "AddTask",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "taskId",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isDeleted",
                    "type": "bool"
                }
            ],
            "name": "deleteTask",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "taskId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isDeleted",
                    "type": "bool"
                }
            ],
            "name": "DeleteTask",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "acc",
                    "type": "address"
                }
            ],
            "name": "getMyTasks",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "username",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "taskText",
                            "type": "string"
                        },
                        {
                            "internalType": "bool",
                            "name": "isDeleted",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct TaskContract.Task[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const address="0xaDf4156B808e4e6391F66d0f3237d22252D38F8b";
    window.web3=await new Web3(window.ethereum);
    await window.ethereum.enable();
    const accounts=await ethereum.request({method:"eth_requestAccounts"});
        const account=accounts[0];
    window.contract=await new window.web3.eth.Contract(abi,address);
    const message=await window.contract.methods.getMyTasks(account).call();
    const main=document.getElementById("root-body");
    for(let i=0;i<message.length;i++){
        const p=document.createElement("tr");
        const td1=document.createElement("td");
        const td2= document.createElement("td");
        const td3= document.createElement("td");

        td1.innerHTML=message[i][3];
        td2.innerHTML=message[i][2];
        elements={};
        elements[td2]=i;

        td3.classList+="btn del";
       // td3.innerText="Delete";
        main.appendChild(p);
        p.appendChild(td2);
        p.appendChild(td1);
        //p.appendChild(td3);
    }


    
    });
    console.log(elements);

var add=document.getElementById("add");

add.addEventListener("click",async()=>{
    var task=document.getElementById("task").value;
    const abi=[
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "taskText",
                    "type": "string"
                },
                {
                    "internalType": "bool",
                    "name": "isDeleted",
                    "type": "bool"
                }
            ],
            "name": "addTask",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "taskId",
                    "type": "uint256"
                }
            ],
            "name": "AddTask",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "taskId",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isDeleted",
                    "type": "bool"
                }
            ],
            "name": "deleteTask",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "taskId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isDeleted",
                    "type": "bool"
                }
            ],
            "name": "DeleteTask",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "acc",
                    "type": "address"
                }
            ],
            "name": "getMyTasks",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "username",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "taskText",
                            "type": "string"
                        },
                        {
                            "internalType": "bool",
                            "name": "isDeleted",
                            "type": "bool"
                        }
                    ],
                    "internalType": "struct TaskContract.Task[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    console.log(task);
    const address="0xaDf4156B808e4e6391F66d0f3237d22252D38F8b";
    window.web3=await new Web3(window.ethereum);
    await window.ethereum.enable();
    window.contract=await new window.web3.eth.Contract(abi,address);
    const accounts=await ethereum.request({method:"eth_requestAccounts"});
        const account=accounts[0];
    await window.contract.methods.addTask(task,false).send({from:account});

})


const setter=async function send(){
    const accounts=await ethereum.request({method:"eth_requestAccounts"});
    const account=accounts[0];
    await window.contract.methods.sendmessage("hjshshjs").send({from:account});
    
}



