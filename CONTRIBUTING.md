# How to contribute
This new guide page was made so more things can have documentation. Any contribution is welcomed and higly encouraged!

## Authoring
This project is powered by Astro Starlight and they have amazing [[documentation available here]](https://starlight.astro.build/getting-started/).  
It is highly suggested to set up the local development server to see your changes in real time.

You can author things in standard Markdown `.md` and contributors can later convert this to optimized `.mdx`

## Structure
Things are typically stored in this format:  
[LANGUAGE] > [MAIN TOPIC] > [SECTION OF TOPIC]  
For example, `en/rb3/rpcs3` is where the English guide for installing Rock Band 3 on RPCS3 is stored.

## Images
Images are stored in two different places:
* `/src/assets` for optimized images - These will be converted to `.webp` when the site builds. Suggested for images that aren't repeated, like console logos and symbols.
* `/public/assets` for raw images - These images will be displayed as is. Make sure they are small because they will not be optimized.

Try to optimize your images preemptively ahead of time as well.  
[[ImageOptim]](https://imageoptim.com/mac) is recommended for Mac.  
There are [[alternatives for other operating systems too]](https://imageoptim.com/versions.html).

## Sidebars
By default, the PS3 Customs sidebar will appear everywhere. You can either define a new sidebar within `astro.config.mjs`.  
Please read [[StarlightUtil's documentation]](https://starlight-utils.pages.dev/utilities/multi-sidebar/) for more information.

Alternatively, you can change the template to `splash` but this will disable the table of contents on the right side.
Please read [[Starlight's documentation on this]](https://starlight.astro.build/reference/frontmatter/#template/) for more information.

## Localizing
Currently, English and Spanish are supported but more languages can be added. Languages are usually split into folder in the `docs` folder. If you want to add another language, keep this in mind.