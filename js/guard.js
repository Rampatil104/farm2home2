if (!sessionStorage.getItem('farm2homeAuth') && !localStorage.getItem('farm2homeAuth')) {
    window.location.replace('login.html');
}
