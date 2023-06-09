const data = [
  {
    id: 1,
    article: {
      id: 1,
      title: "Вступ до JavaScript",
      text: `<h1>Вступ до JavaScript</h1>

    <h2>Що таке JavaScript?</h2>

    <p>JavaScript є однією з найпопулярніших мов програмування, що використовуються для розробки веб-додатків та веб-сайтів. JavaScript зазвичай використовується для створення веб-сторінок, що мають різні ефекти та інтерактивність, такі як рухомі кнопки, форми, меню та багато іншого.</p>

    <h2>Як використовувати JavaScript?</h2>

    <p>JavaScript можна використовувати прямо в HTML-коді в тегах <code>&lt;script&gt;</code>. Наприклад:</p>

    <pre><code>&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Мій перший JavaScript&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Привіт, світ!&lt;/h1&gt;
    &lt;script&gt;
        alert('Hello, world!');
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

    <p>У цьому прикладі ми використовуємо вбудований JavaScript-об'єкт <code>alert()</code> для створення спливаючого вікна з повідомленням "Hello, world!".</p>

    <h2>Заключні слова</h2>

    <p>JavaScript є потужним інструментом для розробки динамічних веб-сайтів та веб-додатків. Надіємось, цей вступний урок допоміг вам краще зрозуміти, що таке JavaScript та як його використовувати в розробці веб-додатків.</p>
`
    },
    exam: {
      id: 1,
      questions: [
        {
          id: 1,
          title: "Що таке JavaScript?",
          answers: [
            {
              id: 2,
              text: "Операційна система для серверів.",
              correct: false
            },
            {
              id: 1,
              text: "Мова програмування для створення динамічних веб-сайтів та веб-додатків.",
              correct: true
            },
            {
              id: 3,
              text: "Редактор коду для фронтенд-розробки.",
              correct: false
            }
          ]
        },
        {
          id: 2,
          title: "Які основні характеристики мови JavaScript?",
          answers: [
            {
              id: 5,
              text: "Мова з низьким рівнем абстракції, що не підтримує об'єктно-орієнтоване програмування.",
              correct: false
            },
            {
              id: 6,
              text: "Мова з жорсткою типізацією, що не дозволяє змінювати тип змінних.",
              correct: false
            },
            {
              id: 4,
              text: "Високорівнева мова, що має динамічну типізацію і підтримує об'єктно-орієнтоване програмування.",
              correct: true
            }
          ]
        },
        {
          id: 3,
          title: "Для чого використовується JavaScript?",
          answers: [
            {
              id: 7,
              text: "Для створення динамічних веб-сайтів та веб-додатків.",
              correct: true
            },
            {
              id: 8,
              text: "Для створення віджетів на робочому столі комп'ютера.",
              correct: false
            },
            {
              id: 9,
              text: "Для написання серверного програмного забезпечення.",
              correct: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 2,
    article: {
      id: 2,
      title: "Змінні в JavaScript",
      text: ` <h1>Змінні в JavaScript</h1> <p>У JavaScript змінні використовуються для зберігання значень та даних. Змінні можуть зберігати будь-який тип даних, включаючи числа, рядки, булеві значення, масиви та об'єкти.</p> <h2>Створення змінних</h2> <p>У JavaScript змінні створюються за допомогою ключового слова <code>let</code>, за яким слідує ім'я змінної та опціональне значення, яке необов'язково вказувати. Наприклад:</p> <pre><code>let name = "John"; let age = 25; let isStudent = true;</code></pre> <p>У цьому прикладі ми створюємо три змінні: <code>name</code> типу рядок зі значенням "John", <code>age</code> типу число зі значенням 25 та <code>isStudent</code> типу булеве значення зі значенням <code>true</code>.</p> <p>Ім'я змінної може складатись з літер, цифр, знаків підкреслення та дефісів, але не може починатись з цифри. Імена змінних регістрозалежні.</p> <h2>Типи даних</h2> <p>У JavaScript існує кілька типів даних, які можуть бути збережені у змінній:</p> <ul> <li>Число: цілі числа та числа з плаваючою комою</li> <li>Рядок: текстові дані</li> <li>Булеві значення: <code>true</code> або <code>false</code></li> <li>Масив: колекція значень</li> <li>Об'єкт: колекція ключ-значення пар</li> <li>Null: спеціальне значення, що вказує на те, що змінна має порожнє знач </ul> <h2>Створення змінних в JavaScript</h2> <p>В JavaScript змінні можна створювати за допомогою ключового слова <code>let</code>, <code>let</code> та <code>const</code>.</p> <h3>Змінні var</h3>   <p>Ключове слово <code>var</code> використовується для створення змінних, які можуть бути доступні в будь-якій частині програми.</p> <pre><code>var myVariable = "Hello, world!"; console.log(myVariable); // виведе "Hello, world!" в консоль</code></pre> <p>У цьому прикладі ми створили змінну з ім'ям <code>myVariable</code> та присвоїли їй значення рядка "Hello, world!". За допомогою функції <code>console.log()</code> ми вивели значення змінної в консоль.</p> <h3>Змінні let</h3> <p>Ключове слово <code>let</code> використовується для створення змінних, які мають блочну область видимості. Це означає, що змінна буде доступна тільки в межах блоку, в якому вона була створена.</p> <pre><code>if (true) { let myVariable = "Hello, world!"; console.log(myVariable); // виведе "Hello, world!" в консоль <br>console.log(myVariable); // виведе помилку, тому що myVariable не існує в цій області видимості</code></pre> <p>У цьому прикладі ми створили змінну з ім'ям <code>myVariable</code> за допомогою ключового слова <code>let</code> в межах блоку <code>if</code>. Після закінчення виконання блоку, змінна <code>myVariable</code> стає недоступною, тому що вона має блочну область видимості.</p> <h3>Змінні const</h3> <p>Ключове слово <code>const</code> використовується для створення змінних, які мають незмінне значення. Тобто, значення, присвоєне змінній, не може бути змі `
    },
    exam: {
      id: 2,
      questions: [
        {
          id: 4,
          title: "Що таке змінні в JavaScript?",
          answers: [
            {
              id: 10,
              text: "Це іменовані контейнери для зберігання даних.",
              correct: true
            },
            {
              id: 11,
              text: "Це функції, що повертають значення.",
              correct: false
            },
            {
              id: 12,
              text: "Це оператори, що виконують арифметичні операції.",
              correct: false
            }
          ]
        },
        {
          id: 5,
          title: "Які типи даних підтримуються в JavaScript?",
          answers: [
            {
              id: 13,
              text: "Тільки числа, рядки і булеві значення.",
              correct: false
            },
            {
              id: 14,
              text: "Числа, рядки, булеві значення, об'єкти, масиви, null і undefined.",
              correct: true
            },
            {
              id: 15,
              text: "Тільки числа, рядки і об'єкти.",
              correct: false
            }
          ]
        },
        {
          id: 6,
          title: "Які правила існують для створення імен змінних в JavaScript?",
          answers: [
            {
              id: 16,
              text: "Ім'я змінної може містити тільки букви і символ _.",
              correct: false
            },
            {
              id: 17,
              text: "Ім'я змінної може містити тільки цифри і символ _.",
              correct: false
            },
            {
              id: 18,
              text: "Ім'я змінної повинно починатись з літери або символу _ і може містити букви, цифри і символ _.",
              correct: true
            }
          ]
        }
      ]
    }
  },
  {
    id: 3,
    article: {
      id: 3,
      title: "Масиви в JavaScript",
      text: "		<h1>Масиви в JavaScript</h1>\n	</header>\n	<main>\n		<section>\n			<h2>Що таке масиви?</h2>\n			<p>Масив - це структура даних в JavaScript, яка дозволяє зберігати набір значень під однією змінною. За допомогою масивів можна зберігати числа, рядки, об'єкти та інші типи даних.</p>\n			<p>У JavaScript масиви є об'єктами, і вони можуть містити будь-які типи даних, навіть інші масиви. Масиви в JavaScript є динамічними, тобто їх розмір може змінюватись під час виконання програми.</p>\n		</section>\n		<section>\n			<h2>Створення масивів</h2>\n			<p>Для створення масиву в JavaScript можна використовувати літерал масиву [] або конструктор Array().</p>\n			<p>Наприклад, створимо масив чисел:</p>\n			<pre><code>const numbers = [1, 2, 3, 4, 5];</code></pre>\n			<p>Або масив рядків:</p>\n			<pre><code>const fruits = ['apple', 'banana', 'orange', 'kiwi'];</code></pre>\n			<p>Масив можна створити і з допомогою конструктора Array(). Наприклад, створимо масив з трьох елементів:</p>\n			<pre><code>const cars = new Array('BMW', 'Audi', 'Mercedes');</code></pre>\n		</section>\n		<section>\n			<h2>Робота з елементами масиву</h2>\n			<p>Щоб отримати доступ до елементів масиву, можна використовувати індекси. Індексація в JavaScript починається з 0.</p>\n			<p>Наприклад, щоб отримати перший елемент масиву numbers, можна використовувати наступний код:</p>\n			<pre><code>const firstNumber = numbers[0]; // 1</code></pre>\n			<p>Щоб змінити значення елемента масиву, можна використовувати індекс:</p>\n			<pre><code>numbers[0] = 10;</code></pre>"
    },
    exam: {
      id: 3,
      questions: [
        {
          id: 1,
          title: "Що таке масив в JavaScript?",
          answers: [
            {
              id: 1,
              text: "Це колекція даних, що зберігається у вигляді списку елементів.",
              correct: true
            },
            {
              id: 2,
              text: "Це функція, що використовується для створення нових об'єктів.",
              correct: false
            },
            {
              id: 3,
              text: "Це оператор, що використовується для створення умовних конструкцій.",
              correct: false
            }
          ]
        },
        {
          id: 2,
          title: "Які основні методи масивів в JavaScript?",
          answers: [
            {
              id: 4,
              text: "push, pop, shift, unshift, slice, splice, concat, join",
              correct: true
            },
            {
              id: 5,
              text: "add, remove, find, sort, filter",
              correct: false
            },
            {
              id: 6,
              text: "append, prepend, split, merge, reverse",
              correct: false
            }
          ]
        },
        {
          id: 3,
          title: "Як можна створити новий масив в JavaScript?",
          answers: [
            {
              id: 7,
              text: "За допомогою літералу масиву: let myArray = [];",
              correct: true
            },
            {
              id: 8,
              text: "За допомогою ключового слова 'new': let myArray = new Array();",
              correct: true
            },
            {
              id: 9,
              text: "За допомогою функції createArray(): let myArray = createArray();",
              correct: false
            }
          ]
        }
      ]
    }
  },
  {
    id: 4,
    article: {
      id: 4,
      title: "Умовні оператори та цикли в JavaScript",
      text: '<h1>Умовні оператори та цикли в JavaScript</h1>\n<h2>Умовний оператор if</h2>\n<p>Умовний оператор if використовується для виконання певних дій залежно від того, чи задовольняє певна умова:</p>\n<pre><code class="language-javascript">\n	if (умова) {\n		// виконуємо код, якщо умова істинна\n	} else {\n		// виконуємо код, якщо умова хибна\n	}\n</code></pre>\n\n<p>Якщо умова істинна, виконується перший блок коду, якщо умова хибна - другий.</p>\n\n<h2>Оператор switch</h2>\n<p>Оператор switch використовується для перевірки різних значень тієї ж змінної:</p>\n<pre><code class="language-javascript">\n	switch (змінна) {\n		case значення_1:\n			// виконуємо код, якщо змінна має значення_1\n			break;\n		case значення_2:\n			// виконуємо код, якщо змінна має значення_2\n			break;\n		default:\n			// виконуємо код, якщо змінна має інше значення\n	}\n</code></pre>\n\n<p>Якщо значення змінної співпадає з одним із значень case, виконується відповідний блок коду. Якщо співпадінь немає, виконується блок default.</p>\n\n<h2>Цикл while</h2>\n<p>Цикл while використовується для повторення певних дій, поки виконується певна умова:</p>\n<pre><code class="language-javascript">\n	while (умова) {\n		// виконуємо код\n	}\n</code></pre>\n\n<p>Цикл while виконується, поки умова істинна.</p>\n <h2>Цикл do while</h2>\n<p>\nЦикл do while виконується до тих пір, поки умова, що перевіряється, є істинною, і після кожної ітерації перевіряється умова ще раз. Синтаксис циклу do while виглядає наступним чином:\n</p>\n<pre><code>do {\n // statements\n} while (condition);\n</code></pre>\n<p>\nВиконання циклу do while може бути повторене принаймні один раз, незалежно від того, чи є умова істинною чи ні. Якщо умова є істинною, цикл продовжується. Якщо умова є хибною, цикл завершується.\n</p>\n<p>Наприклад, наступний код використовує цикл do while для виведення чисел від 1 до 5:</p>\n<pre><code>let i = 1;\ndo {\n console.log(i);\n i++;\n} while (i &lt;= 5);\n</code></pre>\n<p>Результат виконання коду:</p>\n<pre>\n1\n2\n3\n4\n5\n</pre> <h2>Цикл for</h2>\n<p>Цикл <code>for</code> використовується, коли заздалегідь відома кількість ітерацій. Синтаксис циклу <code>for</code>:</p>\n<pre><code>for (початкова_інструкція; умова_перевірки; інструкція_після_кожної_ітерації) {\n // тіло циклу\n}\n</code></pre>\n<p>Давайте розглянемо кожну частину циклу більш детально:</p>\n<ul>\n <li><code>початкова_інструкція</code> - це інструкція, яка виконується один раз перед тим, як цикл розпочне свою роботу. Зазвичай, це інструкція для ініціалізації лічильника циклу.</li>\n <li><code>умова_перевірки</code> - це умова, яка перевіряється перед кожною ітерацією циклу. Якщо умова повертає <code>true</code>, то тіло циклу виконується; якщо <code>false</code>, то виконання циклу завершується.</li>\n <li><code>інструкція_після_кожної_ітерації</code> - це інструкція, яка виконується після кожної ітерації циклу. Зазвичай, це інструкція для збільшення лічильника циклу.</li>\n <li><code>тіло циклу</code> - це блок коду, який виконується на кожній ітерації циклу, якщо умова перевірки повертає <code>true</code>.</li>\n</ul>\n<p>Ось приклад використання циклу <code>for</code>, який виводить числа від 1 до 5:</p>\n<pre><code>for (let i = 1; i &lt;= 5; i++) {\n console.log(i);\n}\n</code></pre>\n<p>Вивід:</p>\n<pre><code>1\n2\n3\n4\n5\n</code></pre> <h2>Оператор break в циклах</h2>\n\n<p>Оператор <code>break</code> дозволяє припинити виконання циклу негайно, навіть якщо умова не виконується. Використовується для виходу з циклу під час виконання якоїсь умови.</p>\n\n<p>Ось приклад використання оператора <code>break</code> в циклі <code>for</code>:</p>\n\n<pre>\n	for (let i = 0; i < 10; i++) {\n		if (i === 5) {\n			break;\n		}\n		console.log(i);\n	}\n	// Виведе: 0 1 2 3 4\n</pre>\n\n<p>У цьому прикладі цикл <code>for</code> виконається 5 разів, але коли <code>i</code> досягне 5, цикл буде припинений завдяки оператору <code>break</code>.</p>\n\n<p>Також оператор <code>break</code> можна використовувати в циклах <code>while</code> та <code>do...while</code>:</p>\n\n<pre>\n	let i = 0;\n	while (i < 10) {\n		console.log(i);\n		i++;\n		if (i === 5) {\n			break;\n		}\n	}\n	// Виведе: 0 1 2 3 4\n	\n	let j = 0;\n	do {\n		console.log(j);\n		j++;\n		if (j === 5) {\n			break;\n		}\n	} while (j < 10);\n	// Виведе: 0 1 2 3 4\n</pre>\n\n<p>У цих прикладах оператор <code>break</code> також використовується для припинення циклу при досягненні <code>i</code> або <code>j</code> рівним 5.</p> <h2>Оператор continue у циклах</h2>\n<p>Оператор <code>continue</code> використовується в циклах для переходу до наступної ітерації без виконання частини коду в поточній ітерації.</p>\n<p>У циклі <code>for</code>, якщо умова в блоці <code>for</code> істинна, код у тілі циклу буде виконуватися. Якщо виконується оператор <code>continue</code>, керування переходить до наступної ітерації, а частина коду, що залишилася, в поточній ітерації пропускається.</p>\n<p>Приклад:</p>\n<pre><code class="language-javascript">\nfor (let i = 0; i <= 5; i++) {\nif (i === 3) {\ncontinue;\n}\nconsole.log(i);\n}\n</code></pre>\n<p>Результат виконання:</p>\n<pre><code class="language-javascript">\n0\n1\n2\n4\n5\n</code></pre>\n<p>У цьому прикладі, коли значення змінної <code>i</code> дорівнює 3, виконання поточної ітерації припиняється, і керування переходить до наступної ітерації.</p>\n<p>Також оператор <code>continue</code> може використовуватися в циклах <code>while</code> і <code>do...while</code>.</p>\n<p>Приклад:</p>\n<pre><code class="language-javascript">\nlet i = 0;\nwhile (i <= 5) {\ni++;\nif (i === 3) {\ncontinue;\n}\nconsole.log(i);\n}\n</code></pre>\n<p>Результат виконання:</p>\n<pre><code class="language-javascript">\n1\n2\n4\n5\n6\n</code></pre>\n<p>У цьому прикладі, коли значення змінної <code>i</code> дорівнює 3, виконання поточної ітерації припиняється, і керування переходить до наступної ітерації.</p>\n<h4>Висновок</h4>\n<p>Оператори <code>break</code> та <code>continue</code> є потужним інструментом в керуванні потоком виконання коду в циклах JavaScript. Вони дозволяють контролювати виконання циклів і зробити код ефективнішим.</p>\n<p>Однак, їх часте використання може зробити код менш читабельним і ускладнити його розуміння, тому необхідно використовувати їх з розумом і тільки там, де це дійсно необхідно.</p>'
    },
    exam: {
      id: 4,
      questions: [
        {
          id: 1,
          title: "Які цикли є в JavaScript?",
          answers: [
            {
              id: 2,
              text: "if, else, switch",
              correct: false
            },
            {
              id: 1,
              text: "for, while, do-while",
              correct: true
            },
            {
              id: 3,
              text: "function, return, break",
              correct: false
            }
          ]
        },
        {
          id: 2,
          title: "Яка різниця між циклами while та do-while?",
          answers: [
            {
              id: 5,
              text: "Цикл do-while виконується тільки якщо умова спочатку true, а цикл while гарантує хоча б одне виконання незалежно від умови.",
              correct: false
            },
            {
              id: 4,
              text: "Цикл while виконується тільки якщо умова спочатку true, а цикл do-while гарантує хоча б одне виконання незалежно від умови.",
              correct: true
            },
            {
              id: 6,
              text: "Цикли while та do-while виконуються однаково, просто умова перевіряється в різних місцях.",
              correct: false
            }
          ]
        },
        {
          id: 3,
          title: "Що таке оператор break в циклах?",
          answers: [
            {
              id: 7,
              text: "Оператор, який зупиняє виконання циклу і переходить на наступний рядок коду за циклом.",
              correct: true
            },
            {
              id: 8,
              text: "Оператор, який перериває виконання функції і повертає значення.",
              correct: false
            },
            {
              id: 9,
              text: "Оператор, який змінює значення змінної на наступне в списку.",
              correct: false
            }
          ]
        }
      ]
    }
  }
];
class Article {
  constructor(id, text, title) {
    this.id = id;
    this.text = text;
    this.title = title;
  }
}
class Exam {
  constructor(id, result, questions) {
    this.id = id;
    this.questions = questions;
    this.result = result;
  }
  checkExam() {
    const current = this.questions.reduce((val, current2) => val + current2.mark, 0);
    this.result = Number.parseInt((100 * current / this.questions.length).toFixed(0));
    return this.result;
  }
  clear() {
    this.result = 0;
    for (const question of this.questions) {
      question.answered = false;
      question.chosenAnswer = void 0;
      question.mark = 0;
    }
  }
  convertToMiniExam() {
    const result = {
      questions: [],
      id: this.id,
      result: this.result
    };
    for (const question of this.questions) {
      result.questions.push({
        id: question.id,
        answeredId: question.chosenAnswer?.id
      });
    }
    return result;
  }
  updateWithMiniExam(miniExam) {
    this.result = miniExam.result;
    for (const question of this.questions) {
      const miniQuestion = miniExam.questions.find((val) => val.id == question.id);
      if (miniQuestion?.answeredId) {
        question.makeAnswer(miniQuestion?.answeredId);
      }
    }
  }
}
class Answer {
  constructor(id, text, correct) {
    this.id = id;
    this.text = text;
    this.correct = correct;
  }
  get isCorrect() {
    return this.correct;
  }
}
class Question {
  constructor(id, title, answers) {
    this.id = id;
    this.title = title;
    this.answers = answers;
    this.mark = 0;
    this.answered = false;
  }
  makeAnswer(answerId) {
    this.answered = true;
    this.chosenAnswer = this.answers.find((answer) => answer.id == answerId);
    const isCorrectChosen = this.chosenAnswer?.isCorrect;
    this.mark = isCorrectChosen ? 1 : 0;
    return isCorrectChosen;
  }
  static generateFromObject(questionObj) {
    const answers = [];
    for (const answer of questionObj.answers) {
      const answerRes = new Answer(answer.id, answer.text, answer.correct);
      answers.push(answerRes);
    }
    const question = new Question(questionObj.id, questionObj.title, answers);
    return question;
  }
}
class Topic {
  constructor(id, article, exam) {
    this.id = id;
    this.article = article;
    this.exam = exam;
  }
  static get() {
    return this.generateFromJSON(JSON.stringify(data));
  }
  static generateFromJSON(jsonObj) {
    const topics = [];
    const objs = JSON.parse(jsonObj);
    for (const topic of objs) {
      const article = new Article(topic.article.id, topic.article.text, topic.article.title);
      const questions = [];
      for (const question of topic.exam.questions) {
        const questionRes = Question.generateFromObject(question);
        questions.push(questionRes);
      }
      const exam = new Exam(topic.exam.id, 0, questions);
      topics.push(new Topic(topic.id, article, exam));
    }
    return topics;
  }
}
export {
  Exam as E,
  Topic as T
};
