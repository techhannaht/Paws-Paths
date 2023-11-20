import "./Map.css"

export const MapWidget = () => {

    return (
        <>
            <section id="mapstext" className="section">
                <h1 class="title"> Froggie and Bean's Favorite Spots</h1>
                <h2 class="subtitle">
                    We've provided our favorite places to walk! I hope you enjoy them as much as we do! - Froggie and Bean 🐾
                </h2>
            </section>

            
            <div  className="columns">
                <div id="mapCard" className="column">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.8895367620457!2d-81.6375894236358!3d38.35153867872668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884f2daeda7fb20b%3A0x17145994c534ef41!2sCity%20Center%20at%20Slack%20Plaza!5e0!3m2!1sen!2sus!4v1699900249099!5m2!1sen!2sus" width="700"
                                    height="450"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </figure>
                        </div>
                       
                        <div class="card-content">
                            <div class="media">

                                <div class="media-content">
                                    <p class="title is-4">City Center at Slack Plaza</p>
                                    <p class="subtitle is-6">Charleston, WV</p>
                                </div>
                            </div>

                            <div class="content">
                                City Center is a great spot to walk your doggos! Located in the heart of downtown Charleston, City Center provides a pet-friendly atmosphere for you and your doggo to socialize in your community.
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mapCard" className="column">

                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.9025206445954!2d-81.63717492363588!3d38.35123817874426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884f2da21ae63355%3A0x53b1a206bb6369f9!2sFife%20Street%20Brewing!5e0!3m2!1sen!2sus!4v1699901072385!5m2!1sen!2sus" width="700" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">

                                <div class="media-content">
                                    <p class="title is-4">Fife Brewery</p>
                                    <p class="subtitle is-6">Charleston, WV</p>
                                </div>
                            </div>

                            <div class="content">
                                Fife Brewery has outdoor seating, it can be a pleasant environment for dog walkers to enjoy the outdoors while having a drink or a meal with their furry friends! Need a teammate for Tuesday night Fife Trivia? Look no further, bring your doggo!
                            </div>
                        </div>
                    </div>

                </div>
                <div id="mapCard" className="column">

                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.1588277644623!2d-81.64450882363609!3d38.345305779090296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884f2d806c8cb2d1%3A0x97acf79f93769d8!2sCarriage%20Trail!5e0!3m2!1sen!2sus!4v1699901693817!5m2!1sen!2sus" width="700"
                                    height="450"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">

                                <div class="media-content">
                                    <p class="title is-4">Carriage Trail</p>
                                    <p class="subtitle is-6">Charleston, WV</p>
                                </div>
                            </div>

                            <div class="content">
                                The Sunrise Carriage Trail is an absolute gem within shouting distance of downtown Charleston. It is a great training trail with beautiful architecture, masonry, craftsmanship, and history in a surprisingly forested setting so close to downtown.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            

        </>

    )
}