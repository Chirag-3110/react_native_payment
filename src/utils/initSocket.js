import io from 'socket.io-client';
const SOCKET_URL='http://192.168.1.5:8000';

class WSservice{
    initializeSocket(){
        try {
            this.socket=io(SOCKET_URL);
            console.log("Socket init");
            this.socket.on('connect',(data)=>{
                this.socket.emit('join', 'Hello World from client');
            })
            this.socket.on('disconnect',(data)=>{
                console.log('socket disconnected');
            })
            this.socket.on('error',(data)=>{
                console.log('socket error');
            })
        } catch (error) {
            console.log(error,"Error in socket");
        }
    }
    emit(event,data={}){
        this.socket.emit(event,data)
    }
    om(event,data){
        this.socket.om(event,data)
    }
    removeListner(listner){
        this.socket.removeListner(listner)
    }
}

const initSocket=new WSservice();

export default initSocket;