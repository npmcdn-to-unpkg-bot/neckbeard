import { addMediaQueries } from '../'

/**
 * Grid
 *
 * @param  {object} useBreakpoints
 * @param  {object} gridGutter - size of gutter
 * @param  {object} gridBlockCount - number of columns
 * @param  {object} breakpoints={} (optional)
 * @return {object}
 */
export default function grid({ helpers: { grid: { useBreakpoints, gridGutter, gridBlockCount } }, breakpoints }) {
    let selectors = {}
    let media = {}
    // The default column width is 100% divided by the column count
    let blockWidth = 100 / gridBlockCount

    /**
     * Response Flexbox Grid
     */
    selectors['wrap'] = {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: `${ gridGutter }px`,
        paddingRight: `${ gridGutter }px`
    }

    selectors['wrap--xpad'] = {
        paddingLeft: 0,
        paddingRight: 0
    }

    selectors['frame'] = {
        marginLeft: -gridGutter,
        marginRight: -gridGutter,

        // IDK How to do this lol
        // @include media(md) {
        //   display: flex
        //   flex-direction: row
        //   flex-wrap: wrap
        // }
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }

    selectors['frame--stay'] = {
        // IDK How to do this lol
        // @include media(only-sm) {
        //     display: flex
        // }
        display: 'flex'
    }

    // Adds the ability to add grids without padding in their blocks
    selectors['frame--xpad [class^="blk"]'] = {
        paddingLeft: 0,
        paddingRight: 0
    }

    // Blocks
    //-------------------------------------------------------------------------- */
    selectors['blk-relative'] = {
        position: 'relative'
    }

    selectors['blk-padding'] = {
        paddingLeft: `${ gridGutter }px`,
        paddingRight: `${ gridGutter }px`
    }

    selectors['blk'] = {
        position: 'relative',
        paddingLeft: `${ gridGutter }px`,
        paddingRight: `${ gridGutter }px`,
        flexGrow: 1,
        flexBasis: 0
    }

    // Generate standard sizing helpers
    for (let x = 1; x <= gridBlockCount; x++) {
        selectors[`blk${ x }`] = {
            position: 'relative',
            paddingLeft: `${ gridGutter }px`,
            paddingRight: `${ gridGutter }px`,
            flexBasis: `${ x * blockWidth }%`
        }
    }

    // Offsets, Pushers, and Pullers
    //-------------------------------------------------------------------------- */
    // Offsets
    for (let x = 1; x <= gridBlockCount; x++) {
        selectors[`blk--offset${ x }`] = {
            marginLeft: `${ x * blockWidth }%`
        }
    }

    // Pushers
    for (let x = 1; x <= gridBlockCount; x++) {
        selectors[`blk--push${ x }`] = {
            left: `${ x * blockWidth }%`
        }
    }

    // Pullers
    for (let x = 1; x <= gridBlockCount; x++) {
        selectors[`blk--pull${ x }`] = {
            right: `${ x * blockWidth }%`
        }
    }

    // Reordering Helpers
    //-------------------------------------------------------------------------- */
    // Basic first and Last helpers
    selectors['blk--first'] = {
        order: 0
    }
    selectors['blk--last'] = {
        order: 1
    }


    /**
     * Media Queries
     */
    if (Object.keys(breakpoints).length !== 0 && useBreakpoints) {
        media = addMediaQueries(selectors, breakpoints)
    }

    return { ...selectors, ...media }
}