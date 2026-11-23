# How to contribute
This new guide page was made so more things can have documentation. Any contribution is welcomed and highly encouraged!

## Authoring
This project is powered by Astro Starlight and they have amazing [[documentation available here]](https://starlight.astro.build/getting-started/).  
It is highly suggested to set up the local development server to see your changes in real time.

You can author things in standard Markdown `.md` and contributors can later convert this to optimized `.mdx`.

It's strongly suggested to enable "`Allow Edits from Maintainers`" when submitting any changes so that maintainers can deal with the super technical stuff.

## Structure
Things are typically stored in this format:  
`[LANGUAGE]` > `[MAIN TOPIC]` > `[SECTION OF TOPIC]`  
For example, `en/rb3/rpcs3` is where the English guide for installing Rock Band 3 on RPCS3 is stored.

## Images
Images are stored in two different places:
* `/src/assets` for optimized images - These will be converted to `.webp` when the site builds. Anything that isn't repeated frequently should go here, like specific setup screenshots.
* `/public/assets` for unoptimized images - These images will be displayed as is. Make sure they are small because they will not be optimized. Anything that's used repeatedly should go here, like logos and pictures of controllers.

Try to optimize any images stored in `public/assets` preemptively.  
[[ImageOptim]](https://imageoptim.com/mac) is recommended for Mac.  
There are [[alternatives for other operating systems too]](https://imageoptim.com/versions.html).

## Sidebars
By default, the PS3 Customs sidebar will appear everywhere. You can either define a new sidebar within `astro.config.mjs`.  
Please read [[StarlightUtil's documentation]](https://starlight-utils.pages.dev/utilities/multi-sidebar/) for more information.

Alternatively, you can change the template to `splash` but this will disable the table of contents on the right side.
Please read [[Starlight's documentation on this]](https://starlight.astro.build/reference/frontmatter/#template/) for more information.

## Localizing
Currently, English and Spanish are supported but more languages can be added. Languages are usually split into folder in the `docs` folder. If you want to add another language, keep this in mind.

## Search
We have a modified search plugin that will search by URL.  
For example, any pages with a URL prefixed with `en/rb3pc/` will be put into the `rb3pc` category.  
Anything that's universal should be put into the main game category, like `en/rb3/`.

## AI Usage
**Pages within this guide project are written for humans by humans. Any usage of AI for writing or images is forbidden. No exceptions!**