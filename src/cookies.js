
export class Cookies {
    constructor(root) {
        this.root = document.querySelector(root)
        this.pageCookieClose = document.querySelector('.fortune-cookie')
        this.pageCookieOpen = document.querySelector('.opened-fortune-cookie')
       
            this.phrases =
            [

                "A vida trará coisas boas se tiveres paciência.",
                "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
                "A maior de todas as torres começa no solo.",
                "Gente todo dia arruma os cabelos, por que não o coração?",
                "O bom-senso vai mais longe do que muito conhecimento.",

            ]
         this.loadPhrase()
    }


    loadPhrase() {
    
        const randonPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)]

        document.querySelector('p').textContent = randonPhrase

    }
}

export class CookiesView extends Cookies {
    constructor(root) {
        super(root)
        this.openCookie()
        this.ButtonOpenAnotherCookie()
    }


    openCookie() {
        const cookie = this.root.querySelector('.image-cookie')
        cookie.addEventListener('click', () => {
            this.openCookieHide()
        })

    }

    openCookieHide() {
        this.pageCookieClose.classList.add('hide')
        this.pageCookieOpen.classList.remove('hide')
    }


    OpenAnotherCookieHide() {
        this.pageCookieClose.classList.remove('hide')
        this.pageCookieOpen.classList.add('hide')
    }


    ButtonOpenAnotherCookie() {
        const buttonAnotherCookie = this.root.querySelector('.button-cookie button')
        buttonAnotherCookie.addEventListener('click', () => {
            this.OpenAnotherCookieHide()
            this.loadPhrase()
        })
    }

}
