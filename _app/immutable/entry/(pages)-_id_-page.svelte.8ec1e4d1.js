import{S as T,i as L,s as $,k as w,q as C,a as A,l as S,m as b,r as D,h as f,c as I,n as J,b as j,G as u,u as B,H as P,e as O,J as te,K as y,L as ne,g as E,v as re,d as N,f as ie,y as ce,z as oe,A as se,B as le,M as pe,I as he}from"../chunks/index.d09ad2c3.js";import{p as ue}from"../chunks/stores.b99bd048.js";let ae=class{constructor(t,r,e){this.id=t,this.questions=e,this.result=r}checkExam(){const t=this.questions.reduce((r,e)=>r+e.mark,0);return this.result=Number.parseInt((100*t/this.questions.length).toFixed(0)),this.result}clear(){this.result=0;for(const t of this.questions)t.answered=!1,t.chosenAnswer=void 0,t.mark=0}convertToMiniExam(){var r;const t={questions:[],id:this.id,result:this.result};for(const e of this.questions)t.questions.push({id:e.id,answeredId:(r=e.chosenAnswer)==null?void 0:r.id});return t}updateWithMiniExam(t){this.result=t.result;for(const r of this.questions){const e=t.questions.find(n=>n.id==r.id);e!=null&&e.answeredId&&r.makeAnswer(e==null?void 0:e.answeredId)}}};class fe extends ae{save(){const t=JSON.stringify(this.convertToMiniExam());localStorage.setItem("exam-"+this.id,t)}upload(){const t=localStorage.getItem("exam-"+this.id)||"";if(t=="")return;const r=JSON.parse(t);this.updateWithMiniExam(r)}}const ve=[{id:1,article:{id:1,title:"Вступ до JavaScript",text:`<h1>Вступ до JavaScript</h1>

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
<p>Однак, їх часте використання може зробити код менш читабельним і ускладнити його розуміння, тому необхідно використовувати їх з розумом і тільки там, де це дійсно необхідно.</p>`},exam:{id:4,questions:[{id:1,title:"Які цикли є в JavaScript?",answers:[{id:2,text:"if, else, switch",correct:!1},{id:1,text:"for, while, do-while",correct:!0},{id:3,text:"function, return, break",correct:!1}]},{id:2,title:"Яка різниця між циклами while та do-while?",answers:[{id:5,text:"Цикл do-while виконується тільки якщо умова спочатку true, а цикл while гарантує хоча б одне виконання незалежно від умови.",correct:!1},{id:4,text:"Цикл while виконується тільки якщо умова спочатку true, а цикл do-while гарантує хоча б одне виконання незалежно від умови.",correct:!0},{id:6,text:"Цикли while та do-while виконуються однаково, просто умова перевіряється в різних місцях.",correct:!1}]},{id:3,title:"Що таке оператор break в циклах?",answers:[{id:7,text:"Оператор, який зупиняє виконання циклу і переходить на наступний рядок коду за циклом.",correct:!0},{id:8,text:"Оператор, який перериває виконання функції і повертає значення.",correct:!1},{id:9,text:"Оператор, який змінює значення змінної на наступне в списку.",correct:!1}]}]}}];class me{constructor(t,r,e){this.id=t,this.text=r,this.title=e}}class _e{constructor(t,r,e){this.id=t,this.text=r,this.correct=e}get isCorrect(){return this.correct}}let ge=class de{constructor(t,r,e){this.id=t,this.title=r,this.answers=e,this.mark=0,this.answered=!1}makeAnswer(t){var e;this.answered=!0,this.chosenAnswer=this.answers.find(n=>n.id==t);const r=(e=this.chosenAnswer)==null?void 0:e.isCorrect;return this.mark=r?1:0,r}static generateFromObject(t){const r=[];for(const n of t.answers){const s=new _e(n.id,n.text,n.correct);r.push(s)}return new de(t.id,t.title,r)}};class R{constructor(t,r,e){this.id=t,this.article=r,this.exam=e}static get(){return this.generateFromJSON(JSON.stringify(ve))}static generateFromJSON(t){const r=[],e=JSON.parse(t);for(const n of e){const s=new me(n.article.id,n.article.text,n.article.title),o=[];for(const i of n.exam.questions){const a=ge.generateFromObject(i);o.push(a)}const l=new ae(n.exam.id,0,o);r.push(new R(n.id,s,l))}return r}}function Q(c,t,r){const e=c.slice();return e[5]=t[r],e}function U(c){var n;let t,r=(n=c[0])==null?void 0:n.answers,e=[];for(let s=0;s<r.length;s+=1)e[s]=X(Q(c,r,s));return{c(){for(let s=0;s<e.length;s+=1)e[s].c();t=O()},l(s){for(let o=0;o<e.length;o+=1)e[o].l(s);t=O()},m(s,o){for(let l=0;l<e.length;l+=1)e[l].m(s,o);j(s,t,o)},p(s,o){var l;if(o&7){r=(l=s[0])==null?void 0:l.answers;let i;for(i=0;i<r.length;i+=1){const a=Q(s,r,i);e[i]?e[i].p(a,o):(e[i]=X(a),e[i].c(),e[i].m(t.parentNode,t))}for(;i<e.length;i+=1)e[i].d(1);e.length=r.length}},d(s){te(e,s),s&&f(t)}}}function X(c){let t,r=c[5].text+"",e,n,s,o;function l(){return c[4](c[5])}return{c(){t=w("div"),e=C(r),n=A(),this.h()},l(i){t=S(i,"DIV",{class:!0});var a=b(t);e=D(a,r),n=I(a),a.forEach(f),this.h()},h(){var i,a;J(t,"class","answer svelte-1t0s3u7"),y(t,"good",((i=c[1])==null?void 0:i.id)==c[5].id&&c[5].isCorrect),y(t,"bad",((a=c[1])==null?void 0:a.id)==c[5].id&&!c[5].isCorrect)},m(i,a){j(i,t,a),u(t,e),u(t,n),s||(o=ne(t,"click",l),s=!0)},p(i,a){var p,m;c=i,a&1&&r!==(r=c[5].text+"")&&B(e,r),a&3&&y(t,"good",((p=c[1])==null?void 0:p.id)==c[5].id&&c[5].isCorrect),a&3&&y(t,"bad",((m=c[1])==null?void 0:m.id)==c[5].id&&!c[5].isCorrect)},d(i){i&&f(t),s=!1,o()}}}function we(c){var i,a;let t,r,e=((i=c[0])==null?void 0:i.title)+"",n,s,o,l=((a=c[0])==null?void 0:a.answers)!=null&&U(c);return{c(){t=w("div"),r=w("div"),n=C(e),s=A(),o=w("div"),l&&l.c(),this.h()},l(p){t=S(p,"DIV",{class:!0});var m=b(t);r=S(m,"DIV",{class:!0});var d=b(r);n=D(d,e),d.forEach(f),s=I(m),o=S(m,"DIV",{class:!0});var h=b(o);l&&l.l(h),h.forEach(f),m.forEach(f),this.h()},h(){J(r,"class","title svelte-1t0s3u7"),J(o,"class","answers-container svelte-1t0s3u7"),J(t,"class","main svelte-1t0s3u7")},m(p,m){j(p,t,m),u(t,r),u(r,n),u(t,s),u(t,o),l&&l.m(o,null)},p(p,[m]){var d,h;m&1&&e!==(e=((d=p[0])==null?void 0:d.title)+"")&&B(n,e),((h=p[0])==null?void 0:h.answers)!=null?l?l.p(p,m):(l=U(p),l.c(),l.m(o,null)):l&&(l.d(1),l=null)},i:P,o:P,d(p){p&&f(t),l&&l.d()}}}function Se(c,t,r){let e,{question:n}=t,{onClick:s}=t;const o=i=>{n!=null&&n.answered||(n==null||n.makeAnswer(i),s())},l=i=>{o(i.id)};return c.$$set=i=>{"question"in i&&r(0,n=i.question),"onClick"in i&&r(3,s=i.onClick)},c.$$.update=()=>{c.$$.dirty&1&&r(1,e=n==null?void 0:n.chosenAnswer)},[n,e,o,s,l]}class be extends T{constructor(t){super(),L(this,t,Se,we,$,{question:0,onClick:3})}}function Y(c,t,r){const e=c.slice();return e[4]=t[r],e}function Z(c){let t,r,e=c[0].questions,n=[];for(let o=0;o<e.length;o+=1)n[o]=ee(Y(c,e,o));const s=o=>N(n[o],1,1,()=>{n[o]=null});return{c(){for(let o=0;o<n.length;o+=1)n[o].c();t=O()},l(o){for(let l=0;l<n.length;l+=1)n[l].l(o);t=O()},m(o,l){for(let i=0;i<n.length;i+=1)n[i].m(o,l);j(o,t,l),r=!0},p(o,l){if(l&1){e=o[0].questions;let i;for(i=0;i<e.length;i+=1){const a=Y(o,e,i);n[i]?(n[i].p(a,l),E(n[i],1)):(n[i]=ee(a),n[i].c(),E(n[i],1),n[i].m(t.parentNode,t))}for(re(),i=e.length;i<n.length;i+=1)s(i);ie()}},i(o){if(!r){for(let l=0;l<e.length;l+=1)E(n[l]);r=!0}},o(o){n=n.filter(Boolean);for(let l=0;l<n.length;l+=1)N(n[l]);r=!1},d(o){te(n,o),o&&f(t)}}}function ee(c){let t,r;return t=new be({props:{question:c[4],onClick:c[3]}}),{c(){ce(t.$$.fragment)},l(e){oe(t.$$.fragment,e)},m(e,n){se(t,e,n),r=!0},p(e,n){const s={};n&1&&(s.question=e[4]),n&1&&(s.onClick=e[3]),t.$set(s)},i(e){r||(E(t.$$.fragment,e),r=!0)},o(e){N(t.$$.fragment,e),r=!1},d(e){le(t,e)}}}function Je(c){var z;let t,r,e,n,s,o,l,i,a=((z=c[0])==null?void 0:z.result)+"",p,m,d,h,k,_,q,W,v=c[0]!=null&&Z(c);return{c(){t=w("div"),v&&v.c(),r=A(),e=w("div"),n=w("div"),s=w("div"),o=C("Ваш результат:"),l=A(),i=w("div"),p=C(a),m=C("%"),d=A(),h=w("div"),k=C("Очистити"),this.h()},l(g){t=S(g,"DIV",{class:!0});var x=b(t);v&&v.l(x),r=I(x),e=S(x,"DIV",{class:!0});var V=b(e);n=S(V,"DIV",{class:!0});var H=b(n);s=S(H,"DIV",{class:!0});var G=b(s);o=D(G,"Ваш результат:"),G.forEach(f),l=I(H),i=S(H,"DIV",{class:!0});var F=b(i);p=D(F,a),m=D(F,"%"),F.forEach(f),H.forEach(f),d=I(V),h=S(V,"DIV",{class:!0});var K=b(h);k=D(K,"Очистити"),K.forEach(f),V.forEach(f),x.forEach(f),this.h()},h(){J(s,"class","result-description svelte-1v03sh7"),J(i,"class","result-main svelte-1v03sh7"),y(i,"good",c[1]>=M),y(i,"bad",c[1]<=M),J(n,"class","result"),J(h,"class","clear svelte-1v03sh7"),J(e,"class","result-container svelte-1v03sh7"),J(t,"class","main")},m(g,x){j(g,t,x),v&&v.m(t,null),u(t,r),u(t,e),u(e,n),u(n,s),u(s,o),u(n,l),u(n,i),u(i,p),u(i,m),u(e,d),u(e,h),u(h,k),_=!0,q||(W=ne(h,"click",c[2]),q=!0)},p(g,[x]){var V;g[0]!=null?v?(v.p(g,x),x&1&&E(v,1)):(v=Z(g),v.c(),E(v,1),v.m(t,r)):v&&(re(),N(v,1,1,()=>{v=null}),ie()),(!_||x&1)&&a!==(a=((V=g[0])==null?void 0:V.result)+"")&&B(p,a),(!_||x&2)&&y(i,"good",g[1]>=M),(!_||x&2)&&y(i,"bad",g[1]<=M)},i(g){_||(E(v),_=!0)},o(g){N(v),_=!1},d(g){g&&f(t),v&&v.d(),q=!1,W()}}}const M=50;function xe(c,t,r){let e,{exam:n}=t;const s=()=>{n==null||n.clear(),n==null||n.save(),r(0,n)},o=()=>{n==null||n.checkExam(),n==null||n.save(),r(0,n)};return c.$$set=l=>{"exam"in l&&r(0,n=l.exam)},c.$$.update=()=>{c.$$.dirty&1&&r(1,e=(n==null?void 0:n.checkExam())||0)},[n,e,s,o]}class ke extends T{constructor(t){super(),L(this,t,xe,Je,$,{exam:0})}}function qe(c){var p,m;let t,r,e,n,s,o=((p=c[1])==null?void 0:p.article.text)+"",l,i,a;return document.title=t=(m=c[1])==null?void 0:m.article.title,i=new ke({props:{exam:c[0]}}),{c(){r=A(),e=w("div"),n=w("div"),s=w("div"),l=A(),ce(i.$$.fragment),this.h()},l(d){pe("svelte-232jec",document.head).forEach(f),r=I(d),e=S(d,"DIV",{class:!0});var k=b(e);n=S(k,"DIV",{class:!0});var _=b(n);s=S(_,"DIV",{class:!0});var q=b(s);q.forEach(f),l=I(_),oe(i.$$.fragment,_),_.forEach(f),k.forEach(f),this.h()},h(){J(s,"class","article-container svelte-ewqq1d"),J(n,"class","container svelte-ewqq1d"),J(e,"class","main svelte-ewqq1d")},m(d,h){j(d,r,h),j(d,e,h),u(e,n),u(n,s),s.innerHTML=o,u(n,l),se(i,n,null),a=!0},p(d,[h]){var _,q;(!a||h&2)&&t!==(t=(_=d[1])==null?void 0:_.article.title)&&(document.title=t),(!a||h&2)&&o!==(o=((q=d[1])==null?void 0:q.article.text)+"")&&(s.innerHTML=o);const k={};h&1&&(k.exam=d[0]),i.$set(k)},i(d){a||(E(i.$$.fragment,d),a=!0)},o(d){N(i.$$.fragment,d),a=!1},d(d){d&&f(r),d&&f(e),le(i)}}}function ye(c,t,r){let e,n;he(c,ue,i=>r(3,n=i));let{data:s}=t;const o=R.generateFromJSON(s.topics);let l;return c.$$set=i=>{"data"in i&&r(2,s=i.data)},c.$$.update=()=>{c.$$.dirty&8&&r(1,e=o.find(i=>i.id==Number.parseInt(n.params.id))),c.$$.dirty&2&&r(0,l=new fe((e==null?void 0:e.exam.id)||0,(e==null?void 0:e.exam.result)||0,(e==null?void 0:e.exam.questions)||[])),c.$$.dirty&1&&typeof window<"u"&&l.upload()},[l,e,s,n]}class Ie extends T{constructor(t){super(),L(this,t,ye,qe,$,{data:2})}}export{Ie as default};
