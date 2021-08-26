const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')
const inst = document.querySelector('.instructions')

const correctAnswers = ['B', 'B', 'B', 'A']

setTimeout(() => {
    inst.classList.remove('text-primary')
    inst.classList.add('text-white')
}, 1500)

form.addEventListener('submit', e => {
    e.preventDefault()

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    // Comparar respuestas

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index])
        score += 25;
    })

    // Mostrar resultados

    scrollTo({ top: 0, behavior: 'smooth' })

    result.classList.remove('d-none')

    setTimeout(() => {
        let output = 0
        
        const timer = setInterval(() => {
            result.querySelector('span').textContent = `${output}%`
            
            if(output !== score){
            output++
            } else {
            clearInterval(timer)
            }
        }, 20)
    }, 300)


})