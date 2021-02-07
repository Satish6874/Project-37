class Question {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton("Play");
      this.title = createElement('h2');
      this.question = createElement('h3');
      this.option1 = createElement('h3');
      this.option2 = createElement('h3');
      this.option3 = createElement('h3');
      this.option4 = createElement('h3');
      this.input1 = createInput("Answer");
    }
    hide(){
      this.title.hide();
      this.button.hide();
      this.input.hide();
      
    }
  
    display(){
      this.title.html("My Quiz Game");
      this.title.position(350,0);

      this.question.html("Question: What starts with and ends with an 'E', but has only one letter?");
      this.question.position(150,80);

      this.option1.html("1. Everyone");
      this.option1.position(150,100);
      this.option2.html("2. Envelope");
      this.option2.position(150,120);
      this.option3.html("3. Engine");
      this.option3.position(150,140);
      this.option4.html("4. Eye");
      this.option4.position(150,160);

      this.input1.position(150,230);

    }
  }
  