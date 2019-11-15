class MessageBoard {
    constructor(){
        this.messages = new Map;
        this.id = 1;
    }
addMessage(value){
    this.messages.set(this.id, value);
    this.id++;
    return this;
}
findMessageById(id){
    return this.messages.get(id);
}
findMessageByValue(val){
    for (let msg of this.messages.values()) {
      if(msg === val) return msg;
    }
  }
}


