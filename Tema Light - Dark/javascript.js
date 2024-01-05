function toggleTheme() {
    const body = document.body;

    // Verifica se o corpo possui a classe 'dark'
    const isDarkMode = body.classList.contains('dark');

    // Alterna entre os temas
    if (isDarkMode) {
        body.classList.remove('dark');
    } else {
        body.classList.add('dark');
    }
}