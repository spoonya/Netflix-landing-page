// import $ from '../local_modules/jquery/dist/jquery.min'

// $(document).ready(() => {
//     // eslint-disable-next-line no-console
//     console.log(`document ready`)
// })

document.querySelectorAll('.faq__item-question').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('faq__item--active')) {
            parent.classList.remove('faq__item--active');
        } else {
            document
                .querySelectorAll('.faq__item')
                .forEach((child) => child.classList.remove('faq__item--active'));

            parent.classList.add('faq__item--active');
        }
    })
);

