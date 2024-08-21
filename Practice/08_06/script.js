/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const main = document.querySelector('main');
const article = '<h1>Hello World</h1>'

const AppendContent = (obj) => {
    obj.innerHTML = article;
    obj.style.backgroundColor = 'purple';
    document.querySelector('h1').style.color = 'white';
    
} 




AppendContent(main);