const servers = document.querySelectorAll('.server');
// const servers_before = window.getComputedStyle(servers, '::before');

servers.forEach(server => {
    server.addEventListener('click', () => {
        const server_before = window.getComputedStyle(server, '::before');

        server.style.setProperty('--jsUpdate','50%');
    })
})