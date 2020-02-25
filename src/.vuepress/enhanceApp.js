import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faGithubSquare, faSlideshare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default ({ Vue, options, router, siteData }) => {
    library.add(
        faFacebook,
        faTwitter,
        faLinkedin,
        faGithubSquare,
        faSlideshare
    )
    Vue.component('font-awesome-icon', FontAwesomeIcon)
    Vue.config.productionTip = false
}