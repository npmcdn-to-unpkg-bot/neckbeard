import { addMediaQueries } from '../'

/**
 * Misc
 *
 * @param  {object} useBreakpoints
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function misc({ helpers: { misc: { useBreakpoints } }, siteWidth, breakpoints }) {
    let selectors = {}
    let media = {}

    /**
     * Text Alignment Helpers
     */
    selectors['center'] = {
        marginLeft: 'auto',
        marginRight: 'auto'
    }

    selectors['default-hover'] = {
        ':hover': {
            opacity: 0.5
        }
    }

    selectors['default-active'] = {
        ':active': {
            opacity: 0.8
        }
    }

    selectors['dim'] = {
        ':hover': {
            opacity: 0.5
        },
        ':active': {
            opacity: 0.8
        }
    }

    selectors['site-width'] = {
        maxWidth: siteWidth
    }

    selectors['lowercase'] = {
        textTransform: 'lowercase'
    }

    selectors['uppercase'] = {
        textTransform: 'uppercase'
    }

    selectors['ell'] = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }

    selectors['imax'] = {
        maxWidth: '100%',
        width: 'auto',
        height: 'auto'
    }

    selectors['i100'] = {
        width: '100%'
    }

    selectors['bgcover'] = {
        backgroundSize: 'cover'
    }

    selectors['bgcenter'] = {
        backgroundPosition: '50%'
    }

    selectors['vam'] = {
        verticalAlign: 'middle'
    }

    selectors['clearfix'] = {
        ':after': {
            content: '""',
            display: 'table',
            clear: 'both'
        }
    }

    selectors['hidetext'] = {
        textIndent: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    }

    /**
     * Media Queries
     */
    if (Object.keys(breakpoints).length !== 0 && useBreakpoints) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}
