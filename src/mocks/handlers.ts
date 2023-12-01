import { rest } from 'msw'

export const citaPersonaje = [
  {
    quote:"Well, I'm better than dirt. Well, most kinds of dirt. I mean not that fancy store bought dirt. That stuffs loaded with nutrients. I.. I can't compete with that stuff.",
    character:"Moe Szyslak",
    image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMoeSzyslak.png?1497567512411",
    characterDirection:"Right"
    
  }
]


export const citaRandom = [
  {    
    quote: 'Marriage is like a coffin and each kid is another nail',
    character: "Homer Simpson",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    characterDirection: "Right",
     
  }
]

export const handlers = [
  rest.get("https://thesimpsonsquoteapi.glitch.me/quotes", (req, res, ctx) => {
     const data = req.url.searchParams.get('character') ? citaPersonaje : citaRandom
     console.log('Ejecutando desde msw', data)     
      return res(
          ctx.status(200),
          ctx.json(data)
      )
  })
]