/* Constants */
const Y_AXIS = 1; // axis of gardient
const X_AXIS = 2;
const WIDTH_CANVAS = 1500;
const HEIGHT_CANVAS = 900;

/* Buttons */
let btnPlay, btnAnswer, btnWrongOne, btnWrongTwo, btnNext;
/* Values for creating button */
let contentBtn, xPosBtn, yPosBtn, widthBtn, heightBtn;
/* Font of fancy text */
let font;
/* Variables to store fancy text */
let title, questionOne, questionTwo, questionTwo_2, questionThree;

const manager = new Manager(WIDTH_CANVAS, HEIGHT_CANVAS);

function preload() {
  font = loadFont(
    "http://themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.ttf"
  );
}

function setup() {
  // Display initial screen
  manager.displayInitScreen();

  // Instanciate title and questions
  title = manager.generateFancyText("QUESTION BOARD", 400, 200, 80, font);
  questionOne = manager.generateFancyText(
    "Choose the animal which lives in 'Antarctica'",
    100,
    200,
    60,
    font
  );
  questionTwo = manager.generateFancyText(
    "Choose the 'north gate'",
    100,
    200,
    80,
    font
  ); // First line
  questionTwo_2 = manager.generateFancyText(
    "from Suwon Hwaseong fortress",
    100,
    300,
    80,
    font
  ); // Second line
  questionThree = manager.generateFancyText(
    "Choose the character who sang ",
    100,
    200,
    80,
    font
  );// First Line

  questionThree_2 = manager.generateFancyText(
    "‘show yourself’ in movie of the Frozen?",
    100,
    300,
    70,
    font
  ); // Second Line
  title.need = 1; // We need to display title when we start our app.
}

function draw() {
  /* Draw background */
  manager.setGradient(
    0,
    0,
    manager.width,
    manager.height,
    color(65),
    color(50),
    Y_AXIS
  );

  /* Scene flow. */
  if (title.need) {
    title.drawFancyText();
  } else if (questionOne.need) {
    questionOne.drawFancyText();
  } else if (questionTwo.need) {
    questionTwo.drawFancyText();
    questionTwo_2.drawFancyText();
  } else if (questionThree.need) {
    questionThree.drawFancyText();
    questionThree_2.drawFancyText();
  }

  /* Scene01 -> Scene02 */
  btnPlay.mousePressed(() => {
    // Hide title and playbutton
    question1_op();
    // Move to the function execution screen when answer button is clicked
    btnAnswer.mousePressed(() => {
      response1();
      /*Scene02 -> Scene03*/
      btnNext.mousePressed(() => {
       question2_op();
       btnAnswer.mousePressed(() => {
         response2();
         /*Scene03 -> end*/
         btnNext.mousePressed(() => {
           question3_op();
           btnAnswer.mousePressed(() => {
             alert('success!');
           });
         });
       });
      });
    });
  });
}
function question1_op(){
    manager.hideFancyText(title);
    manager.hideButton(btnPlay);

    // Display question one and multiple choices
    manager.displayFancyText(questionOne);

    // Display multiple choices
    manager.setValuesBtn("Arctic bear", 600, 400, 320, 70);
    btnWrongOne = manager.displayButton(
      contentBtn,
      xPosBtn,
      yPosBtn,
      widthBtn,
      heightBtn
    );

    manager.setValuesBtn("Penguin", 600, 500, 320, 70);
    btnAnswer = manager.displayButton(
      contentBtn,
      xPosBtn,
      yPosBtn,
      widthBtn,
      heightBtn
    );

    manager.setValuesBtn("Arctic fox", 600, 600, 320, 70);
    btnWrongTwo = manager.displayButton(
      contentBtn,
      xPosBtn,
      yPosBtn,
      widthBtn,
      heightBtn
    );
}
function question2_op(){
   // Hide nextBtn
    manager.hideButton(btnNext);

   // Display question two and multiple choices
   manager.displayFancyText(questionTwo);
   manager.displayFancyText(questionTwo_2);

  // Display multiple choices
  manager.setValuesBtn("Paldalmun Gate", 600, 400, 320, 70);
        btnWrongOne = manager.displayButton(
          contentBtn,
          xPosBtn,
          yPosBtn,
          widthBtn,
          heightBtn
        );

        manager.setValuesBtn("Janganmun Gate", 600, 500, 320, 70);
        btnAnswer = manager.displayButton(
          contentBtn,
          xPosBtn,
          yPosBtn,
          widthBtn,
          heightBtn
        );

        manager.setValuesBtn("Hwaseomun Gate", 600, 600, 320, 70);
        btnWrongTwo = manager.displayButton(
          contentBtn,
          xPosBtn,
          yPosBtn,
          widthBtn,
          heightBtn
        );
}
function question3_op(){
   // Hide nextBtn
    manager.hideButton(btnNext);

   // Display question two and multiple choices
   manager.displayFancyText(questionThree);
   manager.displayFancyText(questionTwo_2);

  // Display multiple choices
  manager.setValuesBtn("Anna", 600, 400, 320, 70);
        btnWrongOne = manager.displayButton(
          contentBtn,
          xPosBtn,
          yPosBtn,
          widthBtn,
          heightBtn
        );

        manager.setValuesBtn("Elsa", 600, 500, 320, 70);
        btnAnswer = manager.displayButton(
          contentBtn,
          xPosBtn,
          yPosBtn,
          widthBtn,
          heightBtn
        );

        manager.setValuesBtn("White snow", 600, 600, 320, 70);
        btnWrongTwo = manager.displayButton(
          contentBtn,
          xPosBtn,
          yPosBtn,
          widthBtn,
          heightBtn
        );
}
function response1(){
   // Hide questionOne, answerBtn and wrongBtn
      manager.hideFancyText(questionOne);
      manager.hideButton(btnWrongOne);
      manager.hideButton(btnWrongTwo);
      manager.hideButton(btnAnswer);

      // On the function execution screen, click the next button
      manager.setValuesBtn("Next Question", width - 250, height - 200, 200, 70);
      btnNext = manager.displayButton(
        contentBtn,
        xPosBtn,
        yPosBtn,
        widthBtn,
        heightBtn
      );
}
function response2(){
   // Hide questionOne, answerBtn and wrongBtn
      manager.hideFancyText(questionTwo);
      manager.hideButton(btnWrongOne);
      manager.hideButton(btnWrongTwo);
      manager.hideButton(btnAnswer);

      // On the function execution screen, click the next button
      manager.setValuesBtn("Next Question", width - 250, height - 200, 200, 70);
      btnNext = manager.displayButton(
        contentBtn,
        xPosBtn,
        yPosBtn,
        widthBtn,
        heightBtn
      );
}
function response3(){
   // Hide questionOne, answerBtn and wrongBtn
      manager.hideFancyText(questionThree);
      manager.hideButton(btnWrongOne);
      manager.hideButton(btnWrongTwo);
      manager.hideButton(btnAnswer);

      // On the function execution screen, click the next button
      manager.setValuesBtn("Next Question", width - 250, height - 200, 200, 70);
      btnNext = manager.displayButton(
        contentBtn,
        xPosBtn,
        yPosBtn,
        widthBtn,
        heightBtn
      );
}