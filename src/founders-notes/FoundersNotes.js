import "./FoundersNotes.css"
import founderpic from "../image/walkpic.jpg"
import beanandfrog from "../image/beanandfrog.jpg"
import walkpic from "../image/walkpic2.jpg"
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"



export const FoundersNotes = () => {

    return (
        <>
          
            <section className="section">
                <div class="columns">
                    <div class="column">
                        <img src={founderpic} />
                    </div>
                    <div class="column">
                        <img src={beanandfrog} />
                    </div>
                    <div class="column">
                        <img src={walkpic} />
                    </div>
                </div>
            </section>


            <article id="foundersnotes" className="message is-large">
                <div className="message-body">
                    Hi there, I'm the founder of Paws&Paths, and I'm here to tell you how my two dogs, Bean and Froggie, inspired me to create this amazing app. It all started with my deep affection for my furry companions and our shared love for long walks.

                    Bean and Froggie have always been more than just pets to me; they're family. Our daily walks together brought us closer and filled our lives with joy. It was during these walks that the idea for Paws&Paths began to take shape.

                    I wanted to share the incredible experience of dog walking with other dog owners and their four-legged friends. The happiness and health benefits that walking brought to Bean and Froggie's lives had to be shared with the world. And so, Paws&Paths was born.

                    Paws&Paths isn't just an app; it's a labor of love. It's a way for dog owners to connect with professional walkers who share the same passion for dogs. With my two beloved pups as my inspiration, I've created a platform that ensures every dog gets the care and exercise they need to live their happiest and healthiest lives.

                    Join us on this journey as we celebrate the bonds between dogs and their owners, promote healthier and happier lifestyles for our furry friends, and make every walk an unforgettable adventure. Whether it's Bean, Froggie, or your own cherished canine companion, Paws&Paths is here to make every walk a moment to remember.
                </div>
            </article>

            <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
            <div class="elfsight-app-35e949b4-88c1-4b73-9391-909341a23e1e" data-elfsight-app-lazy></div>
            <section className="section"> </section>
        </>
    )
}