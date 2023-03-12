var ue=Object.defineProperty;var he=(c,e,r)=>e in c?ue(c,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):c[e]=r;var _=(c,e,r)=>(he(c,typeof e!="symbol"?e+"":e,r),r);import{S as L,i as $,s as B,k as S,q as D,a as I,l as b,m as x,r as N,h as f,c as j,n as J,b as C,G as h,u as R,H as Q,e as F,J as ne,K as E,L as re,g as A,v as ie,d as H,f as ce,y as oe,z as se,A as le,B as ae,M as fe,I as ve}from"../chunks/index.d09ad2c3.js";import{p as me}from"../chunks/stores.57a89576.js";let de=class{constructor(e,r,t){_(this,"id");_(this,"questions");_(this,"result");this.id=e,this.questions=t,this.result=r}checkExam(){const e=this.questions.reduce((r,t)=>r+t.mark,0);return this.result=Number.parseInt((100*e/this.questions.length).toFixed(0)),this.result}clear(){this.result=0;for(const e of this.questions)e.answered=!1,e.chosenAnswer=void 0,e.mark=0}convertToMiniExam(){var r;const e={questions:[],id:this.id,result:this.result};for(const t of this.questions)e.questions.push({id:t.id,answeredId:(r=t.chosenAnswer)==null?void 0:r.id});return e}updateWithMiniExam(e){this.result=e.result;for(const r of this.questions){const t=e.questions.find(n=>n.id==r.id);t!=null&&t.answeredId&&r.makeAnswer(t==null?void 0:t.answeredId)}}};class _e extends de{save(){const e=JSON.stringify(this.convertToMiniExam());localStorage.setItem("exam-"+this.id,e)}upload(){const e=localStorage.getItem("exam-"+this.id)||"";if(e=="")return;const r=JSON.parse(e);this.updateWithMiniExam(r)}}const we=[{id:1,article:{id:1,title:"Вступ до JavaScript",text:`<h1>Вступ до JavaScript</h1>

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
`},exam:{id:1,questions:[{id:1,title:"Що таке JavaScript?",answers:[{id:2,text:"Операційна система для серверів.",correct:!1},{id:1,text:"Мова програмування для створення динамічних веб-сайтів та веб-додатків.",correct:!0},{id:3,text:"Редактор коду для фронтенд-розробки.",correct:!1}]},{id:2,title:"Які основні характеристики мови JavaScript?",answers:[{id:5,text:"Мова з низьким рівнем абстракції, що не підтримує об'єктно-орієнтоване програмування.",correct:!1},{id:6,text:"Мова з жорсткою типізацією, що не дозволяє змінювати тип змінних.",correct:!1},{id:4,text:"Високорівнева мова, що має динамічну типізацію і підтримує об'єктно-орієнтоване програмування.",correct:!0}]},{id:3,title:"Для чого використовується JavaScript?",answers:[{id:7,text:"Для створення динамічних веб-сайтів та веб-додатків.",correct:!0},{id:8,text:"Для створення віджетів на робочому столі комп'ютера.",correct:!1},{id:9,text:"Для написання серверного програмного забезпечення.",correct:!1}]}]}},{id:2,article:{id:2,title:"Змінні в JavaScript",text:` <h1>Змінні в JavaScript</h1> <p>У JavaScript змінні використовуються для зберігання значень та даних. Змінні можуть зберігати будь-який тип даних, включаючи числа, рядки, булеві значення, масиви та об'єкти.</p> <h2>Створення змінних</h2> <p>У JavaScript змінні створюються за допомогою ключового слова <code>let</code>, за яким слідує ім'я змінної та опціональне значення, яке необов'язково вказувати. Наприклад:</p> <pre><code>let name = "John"; let age = 25; let isStudent = true;</code></pre> <p>У цьому прикладі ми створюємо три змінні: <code>name</code> типу рядок зі значенням "John", <code>age</code> типу число зі значенням 25 та <code>isStudent</code> типу булеве значення зі значенням <code>true</code>.</p> <p>Ім'я змінної може складатись з літер, цифр, знаків підкреслення та дефісів, але не може починатись з цифри. Імена змінних регістрозалежні.</p> <h2>Типи даних</h2> <p>У JavaScript існує кілька типів даних, які можуть бути збережені у змінній:</p> <ul> <li>Число: цілі числа та числа з плаваючою комою</li> <li>Рядок: текстові дані</li> <li>Булеві значення: <code>true</code> або <code>false</code></li> <li>Масив: колекція значень</li> <li>Об'єкт: колекція ключ-значення пар</li> <li>Null: спеціальне значення, що вказує на те, що змінна має порожнє знач </ul> <h2>Створення змінних в JavaScript</h2> <p>В JavaScript змінні можна створювати за допомогою ключового слова <code>let</code>, <code>let</code> та <code>const</code>.</p> <h3>Змінні var</h3>   <p>Ключове слово <code>var</code> використовується для створення змінних, які можуть бути доступні в будь-якій частині програми.</p> <pre><code>var myVariable = "Hello, world!"; console.log(myVariable); // виведе "Hello, world!" в консоль</code></pre> <p>У цьому прикладі ми створили змінну з ім'ям <code>myVariable</code> та присвоїли їй значення рядка "Hello, world!". За допомогою функції <code>console.log()</code> ми вивели значення змінної в консоль.</p> <h3>Змінні let</h3> <p>Ключове слово <code>let</code> використовується для створення змінних, які мають блочну область видимості. Це означає, що змінна буде доступна тільки в межах блоку, в якому вона була створена.</p> <pre><code>if (true) { let myVariable = "Hello, world!"; console.log(myVariable); // виведе "Hello, world!" в консоль <br>console.log(myVariable); // виведе помилку, тому що myVariable не існує в цій області видимості</code></pre> <p>У цьому прикладі ми створили змінну з ім'ям <code>myVariable</code> за допомогою ключового слова <code>let</code> в межах блоку <code>if</code>. Після закінчення виконання блоку, змінна <code>myVariable</code> стає недоступною, тому що вона має блочну область видимості.</p> <h3>Змінні const</h3> <p>Ключове слово <code>const</code> використовується для створення змінних, які мають незмінне значення. Тобто, значення, присвоєне змінній, не може бути змі `},exam:{id:2,questions:[{id:4,title:"Що таке змінні в JavaScript?",answers:[{id:10,text:"Це іменовані контейнери для зберігання даних.",correct:!0},{id:11,text:"Це функції, що повертають значення.",correct:!1},{id:12,text:"Це оператори, що виконують арифметичні операції.",correct:!1}]},{id:5,title:"Які типи даних підтримуються в JavaScript?",answers:[{id:13,text:"Тільки числа, рядки і булеві значення.",correct:!1},{id:14,text:"Числа, рядки, булеві значення, об'єкти, масиви, null і undefined.",correct:!0},{id:15,text:"Тільки числа, рядки і об'єкти.",correct:!1}]},{id:6,title:"Які правила існують для створення імен змінних в JavaScript?",answers:[{id:16,text:"Ім'я змінної може містити тільки букви і символ _.",correct:!1},{id:17,text:"Ім'я змінної може містити тільки цифри і символ _.",correct:!1},{id:18,text:"Ім'я змінної повинно починатись з літери або символу _ і може містити букви, цифри і символ _.",correct:!0}]}]}},{id:3,article:{id:3,title:"Масиви в JavaScript",text:`		<h1>Масиви в JavaScript</h1>
	</header>
	<main>
		<section>
			<h2>Що таке масиви?</h2>
			<p>Масив - це структура даних в JavaScript, яка дозволяє зберігати набір значень під однією змінною. За допомогою масивів можна зберігати числа, рядки, об'єкти та інші типи даних.</p>
			<p>У JavaScript масиви є об'єктами, і вони можуть містити будь-які типи даних, навіть інші масиви. Масиви в JavaScript є динамічними, тобто їх розмір може змінюватись під час виконання програми.</p>
		</section>
		<section>
			<h2>Створення масивів</h2>
			<p>Для створення масиву в JavaScript можна використовувати літерал масиву [] або конструктор Array().</p>
			<p>Наприклад, створимо масив чисел:</p>
			<pre><code>const numbers = [1, 2, 3, 4, 5];</code></pre>
			<p>Або масив рядків:</p>
			<pre><code>const fruits = ['apple', 'banana', 'orange', 'kiwi'];</code></pre>
			<p>Масив можна створити і з допомогою конструктора Array(). Наприклад, створимо масив з трьох елементів:</p>
			<pre><code>const cars = new Array('BMW', 'Audi', 'Mercedes');</code></pre>
		</section>
		<section>
			<h2>Робота з елементами масиву</h2>
			<p>Щоб отримати доступ до елементів масиву, можна використовувати індекси. Індексація в JavaScript починається з 0.</p>
			<p>Наприклад, щоб отримати перший елемент масиву numbers, можна використовувати наступний код:</p>
			<pre><code>const firstNumber = numbers[0]; // 1</code></pre>
			<p>Щоб змінити значення елемента масиву, можна використовувати індекс:</p>
			<pre><code>numbers[0] = 10;</code></pre>`},exam:{id:3,questions:[{id:1,title:"Що таке масив в JavaScript?",answers:[{id:1,text:"Це колекція даних, що зберігається у вигляді списку елементів.",correct:!0},{id:2,text:"Це функція, що використовується для створення нових об'єктів.",correct:!1},{id:3,text:"Це оператор, що використовується для створення умовних конструкцій.",correct:!1}]},{id:2,title:"Які основні методи масивів в JavaScript?",answers:[{id:4,text:"push, pop, shift, unshift, slice, splice, concat, join",correct:!0},{id:5,text:"add, remove, find, sort, filter",correct:!1},{id:6,text:"append, prepend, split, merge, reverse",correct:!1}]},{id:3,title:"Як можна створити новий масив в JavaScript?",answers:[{id:7,text:"За допомогою літералу масиву: let myArray = [];",correct:!0},{id:8,text:"За допомогою ключового слова 'new': let myArray = new Array();",correct:!0},{id:9,text:"За допомогою функції createArray(): let myArray = createArray();",correct:!1}]}]}},{id:4,article:{id:4,title:"Умовні оператори та цикли в JavaScript",text:`<h1>Умовні оператори та цикли в JavaScript</h1>
<h2>Умовний оператор if</h2>
<p>Умовний оператор if використовується для виконання певних дій залежно від того, чи задовольняє певна умова:</p>
<pre><code class="language-javascript">
	if (умова) {
		// виконуємо код, якщо умова істинна
	} else {
		// виконуємо код, якщо умова хибна
	}
</code></pre>

<p>Якщо умова істинна, виконується перший блок коду, якщо умова хибна - другий.</p>

<h2>Оператор switch</h2>
<p>Оператор switch використовується для перевірки різних значень тієї ж змінної:</p>
<pre><code class="language-javascript">
	switch (змінна) {
		case значення_1:
			// виконуємо код, якщо змінна має значення_1
			break;
		case значення_2:
			// виконуємо код, якщо змінна має значення_2
			break;
		default:
			// виконуємо код, якщо змінна має інше значення
	}
</code></pre>

<p>Якщо значення змінної співпадає з одним із значень case, виконується відповідний блок коду. Якщо співпадінь немає, виконується блок default.</p>

<h2>Цикл while</h2>
<p>Цикл while використовується для повторення певних дій, поки виконується певна умова:</p>
<pre><code class="language-javascript">
	while (умова) {
		// виконуємо код
	}
</code></pre>

<p>Цикл while виконується, поки умова істинна.</p>
 <h2>Цикл do while</h2>
<p>
Цикл do while виконується до тих пір, поки умова, що перевіряється, є істинною, і після кожної ітерації перевіряється умова ще раз. Синтаксис циклу do while виглядає наступним чином:
</p>
<pre><code>do {
 // statements
} while (condition);
</code></pre>
<p>
Виконання циклу do while може бути повторене принаймні один раз, незалежно від того, чи є умова істинною чи ні. Якщо умова є істинною, цикл продовжується. Якщо умова є хибною, цикл завершується.
</p>
<p>Наприклад, наступний код використовує цикл do while для виведення чисел від 1 до 5:</p>
<pre><code>let i = 1;
do {
 console.log(i);
 i++;
} while (i &lt;= 5);
</code></pre>
<p>Результат виконання коду:</p>
<pre>
1
2
3
4
5
</pre> <h2>Цикл for</h2>
<p>Цикл <code>for</code> використовується, коли заздалегідь відома кількість ітерацій. Синтаксис циклу <code>for</code>:</p>
<pre><code>for (початкова_інструкція; умова_перевірки; інструкція_після_кожної_ітерації) {
 // тіло циклу
}
</code></pre>
<p>Давайте розглянемо кожну частину циклу більш детально:</p>
<ul>
 <li><code>початкова_інструкція</code> - це інструкція, яка виконується один раз перед тим, як цикл розпочне свою роботу. Зазвичай, це інструкція для ініціалізації лічильника циклу.</li>
 <li><code>умова_перевірки</code> - це умова, яка перевіряється перед кожною ітерацією циклу. Якщо умова повертає <code>true</code>, то тіло циклу виконується; якщо <code>false</code>, то виконання циклу завершується.</li>
 <li><code>інструкція_після_кожної_ітерації</code> - це інструкція, яка виконується після кожної ітерації циклу. Зазвичай, це інструкція для збільшення лічильника циклу.</li>
 <li><code>тіло циклу</code> - це блок коду, який виконується на кожній ітерації циклу, якщо умова перевірки повертає <code>true</code>.</li>
</ul>
<p>Ось приклад використання циклу <code>for</code>, який виводить числа від 1 до 5:</p>
<pre><code>for (let i = 1; i &lt;= 5; i++) {
 console.log(i);
}
</code></pre>
<p>Вивід:</p>
<pre><code>1
2
3
4
5
</code></pre> <h2>Оператор break в циклах</h2>

<p>Оператор <code>break</code> дозволяє припинити виконання циклу негайно, навіть якщо умова не виконується. Використовується для виходу з циклу під час виконання якоїсь умови.</p>

<p>Ось приклад використання оператора <code>break</code> в циклі <code>for</code>:</p>

<pre>
	for (let i = 0; i < 10; i++) {
		if (i === 5) {
			break;
		}
		console.log(i);
	}
	// Виведе: 0 1 2 3 4
</pre>

<p>У цьому прикладі цикл <code>for</code> виконається 5 разів, але коли <code>i</code> досягне 5, цикл буде припинений завдяки оператору <code>break</code>.</p>

<p>Також оператор <code>break</code> можна використовувати в циклах <code>while</code> та <code>do...while</code>:</p>

<pre>
	let i = 0;
	while (i < 10) {
		console.log(i);
		i++;
		if (i === 5) {
			break;
		}
	}
	// Виведе: 0 1 2 3 4
	
	let j = 0;
	do {
		console.log(j);
		j++;
		if (j === 5) {
			break;
		}
	} while (j < 10);
	// Виведе: 0 1 2 3 4
</pre>

<p>У цих прикладах оператор <code>break</code> також використовується для припинення циклу при досягненні <code>i</code> або <code>j</code> рівним 5.</p> <h2>Оператор continue у циклах</h2>
<p>Оператор <code>continue</code> використовується в циклах для переходу до наступної ітерації без виконання частини коду в поточній ітерації.</p>
<p>У циклі <code>for</code>, якщо умова в блоці <code>for</code> істинна, код у тілі циклу буде виконуватися. Якщо виконується оператор <code>continue</code>, керування переходить до наступної ітерації, а частина коду, що залишилася, в поточній ітерації пропускається.</p>
<p>Приклад:</p>
<pre><code class="language-javascript">
for (let i = 0; i <= 5; i++) {
if (i === 3) {
continue;
}
console.log(i);
}
</code></pre>
<p>Результат виконання:</p>
<pre><code class="language-javascript">
0
1
2
4
5
</code></pre>
<p>У цьому прикладі, коли значення змінної <code>i</code> дорівнює 3, виконання поточної ітерації припиняється, і керування переходить до наступної ітерації.</p>
<p>Також оператор <code>continue</code> може використовуватися в циклах <code>while</code> і <code>do...while</code>.</p>
<p>Приклад:</p>
<pre><code class="language-javascript">
let i = 0;
while (i <= 5) {
i++;
if (i === 3) {
continue;
}
console.log(i);
}
</code></pre>
<p>Результат виконання:</p>
<pre><code class="language-javascript">
1
2
4
5
6
</code></pre>
<p>У цьому прикладі, коли значення змінної <code>i</code> дорівнює 3, виконання поточної ітерації припиняється, і керування переходить до наступної ітерації.</p>
<h4>Висновок</h4>
<p>Оператори <code>break</code> та <code>continue</code> є потужним інструментом в керуванні потоком виконання коду в циклах JavaScript. Вони дозволяють контролювати виконання циклів і зробити код ефективнішим.</p>
<p>Однак, їх часте використання може зробити код менш читабельним і ускладнити його розуміння, тому необхідно використовувати їх з розумом і тільки там, де це дійсно необхідно.</p>`},exam:{id:4,questions:[{id:1,title:"Які цикли є в JavaScript?",answers:[{id:2,text:"if, else, switch",correct:!1},{id:1,text:"for, while, do-while",correct:!0},{id:3,text:"function, return, break",correct:!1}]},{id:2,title:"Яка різниця між циклами while та do-while?",answers:[{id:5,text:"Цикл do-while виконується тільки якщо умова спочатку true, а цикл while гарантує хоча б одне виконання незалежно від умови.",correct:!1},{id:4,text:"Цикл while виконується тільки якщо умова спочатку true, а цикл do-while гарантує хоча б одне виконання незалежно від умови.",correct:!0},{id:6,text:"Цикли while та do-while виконуються однаково, просто умова перевіряється в різних місцях.",correct:!1}]},{id:3,title:"Що таке оператор break в циклах?",answers:[{id:7,text:"Оператор, який зупиняє виконання циклу і переходить на наступний рядок коду за циклом.",correct:!0},{id:8,text:"Оператор, який перериває виконання функції і повертає значення.",correct:!1},{id:9,text:"Оператор, який змінює значення змінної на наступне в списку.",correct:!1}]}]}}];class ge{constructor(e,r,t){_(this,"id");_(this,"text");_(this,"title");this.id=e,this.text=r,this.title=t}}class Se{constructor(e,r,t){_(this,"id");_(this,"text");_(this,"correct");this.id=e,this.text=r,this.correct=t}get isCorrect(){return this.correct}}let be=class pe{constructor(e,r,t){_(this,"id");_(this,"title");_(this,"answers");_(this,"chosenAnswer");_(this,"mark");_(this,"answered");this.id=e,this.title=r,this.answers=t,this.mark=0,this.answered=!1}makeAnswer(e){var t;this.answered=!0,this.chosenAnswer=this.answers.find(n=>n.id==e);const r=(t=this.chosenAnswer)==null?void 0:t.isCorrect;return this.mark=r?1:0,r}static generateFromObject(e){const r=[];for(const n of e.answers){const s=new Se(n.id,n.text,n.correct);r.push(s)}return new pe(e.id,e.title,r)}};class W{constructor(e,r,t){_(this,"id");_(this,"article");_(this,"exam");this.id=e,this.article=r,this.exam=t}static get(){return this.generateFromJSON(JSON.stringify(we))}static generateFromJSON(e){const r=[],t=JSON.parse(e);for(const n of t){const s=new ge(n.article.id,n.article.text,n.article.title),o=[];for(const i of n.exam.questions){const a=be.generateFromObject(i);o.push(a)}const l=new de(n.exam.id,0,o);r.push(new W(n.id,s,l))}return r}}function U(c,e,r){const t=c.slice();return t[5]=e[r],t}function X(c){var n;let e,r=(n=c[0])==null?void 0:n.answers,t=[];for(let s=0;s<r.length;s+=1)t[s]=Y(U(c,r,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=F()},l(s){for(let o=0;o<t.length;o+=1)t[o].l(s);e=F()},m(s,o){for(let l=0;l<t.length;l+=1)t[l].m(s,o);C(s,e,o)},p(s,o){var l;if(o&7){r=(l=s[0])==null?void 0:l.answers;let i;for(i=0;i<r.length;i+=1){const a=U(s,r,i);t[i]?t[i].p(a,o):(t[i]=Y(a),t[i].c(),t[i].m(e.parentNode,e))}for(;i<t.length;i+=1)t[i].d(1);t.length=r.length}},d(s){ne(t,s),s&&f(e)}}}function Y(c){let e,r=c[5].text+"",t,n,s,o;function l(){return c[4](c[5])}return{c(){e=S("div"),t=D(r),n=I(),this.h()},l(i){e=b(i,"DIV",{class:!0});var a=x(e);t=N(a,r),n=j(a),a.forEach(f),this.h()},h(){var i,a;J(e,"class","answer svelte-1t0s3u7"),E(e,"good",((i=c[1])==null?void 0:i.id)==c[5].id&&c[5].isCorrect),E(e,"bad",((a=c[1])==null?void 0:a.id)==c[5].id&&!c[5].isCorrect)},m(i,a){C(i,e,a),h(e,t),h(e,n),s||(o=re(e,"click",l),s=!0)},p(i,a){var p,m;c=i,a&1&&r!==(r=c[5].text+"")&&R(t,r),a&3&&E(e,"good",((p=c[1])==null?void 0:p.id)==c[5].id&&c[5].isCorrect),a&3&&E(e,"bad",((m=c[1])==null?void 0:m.id)==c[5].id&&!c[5].isCorrect)},d(i){i&&f(e),s=!1,o()}}}function xe(c){var i,a;let e,r,t=((i=c[0])==null?void 0:i.title)+"",n,s,o,l=((a=c[0])==null?void 0:a.answers)!=null&&X(c);return{c(){e=S("div"),r=S("div"),n=D(t),s=I(),o=S("div"),l&&l.c(),this.h()},l(p){e=b(p,"DIV",{class:!0});var m=x(e);r=b(m,"DIV",{class:!0});var d=x(r);n=N(d,t),d.forEach(f),s=j(m),o=b(m,"DIV",{class:!0});var u=x(o);l&&l.l(u),u.forEach(f),m.forEach(f),this.h()},h(){J(r,"class","title svelte-1t0s3u7"),J(o,"class","answers-container svelte-1t0s3u7"),J(e,"class","main svelte-1t0s3u7")},m(p,m){C(p,e,m),h(e,r),h(r,n),h(e,s),h(e,o),l&&l.m(o,null)},p(p,[m]){var d,u;m&1&&t!==(t=((d=p[0])==null?void 0:d.title)+"")&&R(n,t),((u=p[0])==null?void 0:u.answers)!=null?l?l.p(p,m):(l=X(p),l.c(),l.m(o,null)):l&&(l.d(1),l=null)},i:Q,o:Q,d(p){p&&f(e),l&&l.d()}}}function Je(c,e,r){let t,{question:n}=e,{onClick:s}=e;const o=i=>{n!=null&&n.answered||(n==null||n.makeAnswer(i),s())},l=i=>{o(i.id)};return c.$$set=i=>{"question"in i&&r(0,n=i.question),"onClick"in i&&r(3,s=i.onClick)},c.$$.update=()=>{c.$$.dirty&1&&r(1,t=n==null?void 0:n.chosenAnswer)},[n,t,o,s,l]}class ke extends L{constructor(e){super(),$(this,e,Je,xe,B,{question:0,onClick:3})}}function Z(c,e,r){const t=c.slice();return t[4]=e[r],t}function ee(c){let e,r,t=c[0].questions,n=[];for(let o=0;o<t.length;o+=1)n[o]=te(Z(c,t,o));const s=o=>H(n[o],1,1,()=>{n[o]=null});return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=F()},l(o){for(let l=0;l<n.length;l+=1)n[l].l(o);e=F()},m(o,l){for(let i=0;i<n.length;i+=1)n[i].m(o,l);C(o,e,l),r=!0},p(o,l){if(l&1){t=o[0].questions;let i;for(i=0;i<t.length;i+=1){const a=Z(o,t,i);n[i]?(n[i].p(a,l),A(n[i],1)):(n[i]=te(a),n[i].c(),A(n[i],1),n[i].m(e.parentNode,e))}for(ie(),i=t.length;i<n.length;i+=1)s(i);ce()}},i(o){if(!r){for(let l=0;l<t.length;l+=1)A(n[l]);r=!0}},o(o){n=n.filter(Boolean);for(let l=0;l<n.length;l+=1)H(n[l]);r=!1},d(o){ne(n,o),o&&f(e)}}}function te(c){let e,r;return e=new ke({props:{question:c[4],onClick:c[3]}}),{c(){oe(e.$$.fragment)},l(t){se(e.$$.fragment,t)},m(t,n){le(e,t,n),r=!0},p(t,n){const s={};n&1&&(s.question=t[4]),n&1&&(s.onClick=t[3]),e.$set(s)},i(t){r||(A(e.$$.fragment,t),r=!0)},o(t){H(e.$$.fragment,t),r=!1},d(t){ae(e,t)}}}function qe(c){var G;let e,r,t,n,s,o,l,i,a=((G=c[0])==null?void 0:G.result)+"",p,m,d,u,q,w,y,z,v=c[0]!=null&&ee(c);return{c(){e=S("div"),v&&v.c(),r=I(),t=S("div"),n=S("div"),s=S("div"),o=D("Ваш результат:"),l=I(),i=S("div"),p=D(a),m=D("%"),d=I(),u=S("div"),q=D("Очистити"),this.h()},l(g){e=b(g,"DIV",{class:!0});var k=x(e);v&&v.l(k),r=j(k),t=b(k,"DIV",{class:!0});var V=x(t);n=b(V,"DIV",{class:!0});var M=x(n);s=b(M,"DIV",{class:!0});var K=x(s);o=N(K,"Ваш результат:"),K.forEach(f),l=j(M),i=b(M,"DIV",{class:!0});var T=x(i);p=N(T,a),m=N(T,"%"),T.forEach(f),M.forEach(f),d=j(V),u=b(V,"DIV",{class:!0});var P=x(u);q=N(P,"Очистити"),P.forEach(f),V.forEach(f),k.forEach(f),this.h()},h(){J(s,"class","result-description svelte-1v03sh7"),J(i,"class","result-main svelte-1v03sh7"),E(i,"good",c[1]>=O),E(i,"bad",c[1]<=O),J(n,"class","result"),J(u,"class","clear svelte-1v03sh7"),J(t,"class","result-container svelte-1v03sh7"),J(e,"class","main")},m(g,k){C(g,e,k),v&&v.m(e,null),h(e,r),h(e,t),h(t,n),h(n,s),h(s,o),h(n,l),h(n,i),h(i,p),h(i,m),h(t,d),h(t,u),h(u,q),w=!0,y||(z=re(u,"click",c[2]),y=!0)},p(g,[k]){var V;g[0]!=null?v?(v.p(g,k),k&1&&A(v,1)):(v=ee(g),v.c(),A(v,1),v.m(e,r)):v&&(ie(),H(v,1,1,()=>{v=null}),ce()),(!w||k&1)&&a!==(a=((V=g[0])==null?void 0:V.result)+"")&&R(p,a),(!w||k&2)&&E(i,"good",g[1]>=O),(!w||k&2)&&E(i,"bad",g[1]<=O)},i(g){w||(A(v),w=!0)},o(g){H(v),w=!1},d(g){g&&f(e),v&&v.d(),y=!1,z()}}}const O=50;function ye(c,e,r){let t,{exam:n}=e;const s=()=>{n==null||n.clear(),n==null||n.save(),r(0,n)},o=()=>{n==null||n.checkExam(),n==null||n.save(),r(0,n)};return c.$$set=l=>{"exam"in l&&r(0,n=l.exam)},c.$$.update=()=>{c.$$.dirty&1&&r(1,t=(n==null?void 0:n.checkExam())||0)},[n,t,s,o]}class Ee extends L{constructor(e){super(),$(this,e,ye,qe,B,{exam:0})}}function Ae(c){var p,m;let e,r,t,n,s,o=((p=c[1])==null?void 0:p.article.text)+"",l,i,a;return document.title=e=(m=c[1])==null?void 0:m.article.title,i=new Ee({props:{exam:c[0]}}),{c(){r=I(),t=S("div"),n=S("div"),s=S("div"),l=I(),oe(i.$$.fragment),this.h()},l(d){fe("svelte-232jec",document.head).forEach(f),r=j(d),t=b(d,"DIV",{class:!0});var q=x(t);n=b(q,"DIV",{class:!0});var w=x(n);s=b(w,"DIV",{class:!0});var y=x(s);y.forEach(f),l=j(w),se(i.$$.fragment,w),w.forEach(f),q.forEach(f),this.h()},h(){J(s,"class","article-container svelte-ewqq1d"),J(n,"class","container svelte-ewqq1d"),J(t,"class","main svelte-ewqq1d")},m(d,u){C(d,r,u),C(d,t,u),h(t,n),h(n,s),s.innerHTML=o,h(n,l),le(i,n,null),a=!0},p(d,[u]){var w,y;(!a||u&2)&&e!==(e=(w=d[1])==null?void 0:w.article.title)&&(document.title=e),(!a||u&2)&&o!==(o=((y=d[1])==null?void 0:y.article.text)+"")&&(s.innerHTML=o);const q={};u&1&&(q.exam=d[0]),i.$set(q)},i(d){a||(A(i.$$.fragment,d),a=!0)},o(d){H(i.$$.fragment,d),a=!1},d(d){d&&f(r),d&&f(t),ae(i)}}}function Ve(c,e,r){let t,n;ve(c,me,i=>r(3,n=i));let{data:s}=e;const o=W.generateFromJSON(s.topics);let l;return c.$$set=i=>{"data"in i&&r(2,s=i.data)},c.$$.update=()=>{c.$$.dirty&8&&r(1,t=o.find(i=>i.id==Number.parseInt(n.params.id))),c.$$.dirty&2&&r(0,l=new _e((t==null?void 0:t.exam.id)||0,(t==null?void 0:t.exam.result)||0,(t==null?void 0:t.exam.questions)||[])),c.$$.dirty&1&&typeof window<"u"&&l.upload()},[l,t,s,n]}class Ne extends L{constructor(e){super(),$(this,e,Ve,Ae,B,{data:2})}}export{Ne as default};
