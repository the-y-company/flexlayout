<!-- badges: start -->
<!-- badges: end -->

# flexlayout

A responsive three-column layout for Shiny. `flexlayout()` creates up-to 
three-column layout where the left and right columns collapse into offcanvas
elements on tablets and mobiles.

The development of the flexlayout package was funded by
[The Association of State and Territorial Health Officials](https://www.astho.org). 
The package is used in their flagship product, a shiny app for 
[Profile of State and Territorial Public Health](https://astho.shinyapps.io/profile-app-2-master_2/).

`flexlayout()` provides a simple and creative solution to making shiny apps render cleanly on 
mobile and tablet devices with minimal effort.

## Installation

You can install the development version of flexlayout from [GitHub](https://github.com/) with:

``` r
# install.packages("remotes")
remotes::install_github("the-y-company/flexlayout")
```

## Example

``` r
library(shiny)
library(flexlayout)

ui <- fluidPage(
  theme = bslib::bs_theme(5L),
  flexlayout(
    left = div(
      h1("LEFT")
    ),
    center = div(
      h1("CENTER")
    ),
    right = div(
      h1("RIGHT")
    )
  )
)

server <- function(input, output, session) {
  
}

shinyApp(ui, server)
```

Several options can be passed to the `flexlayout()` function to customize the output:

``` r
flexlayout <- function(
  left,
  center,
  right = NULL,
  left_button = offcanvas_button(shiny::icon("filter")),
  right_button = offcanvas_button(shiny::icon("info")),
  left_width = 22,
  center_width = 56,
  right_width = 22
)
```

Setting `right` or `left` to `NULL` results in a two-column layout. 
You can modify the buttons used to open the offcanvas elements used on smaller screens.
The `*_width` arguments specify the width of each column in the layout and should sum to 100.

This product was funded by [The Association of State and Territorial Health Officials](https://www.astho.org),
and was supported by [OE22-2203: Strengthening U.S. Public Health Infrastructure, Workforce, and Data Systems grant](https://www.cdc.gov/infrastructure/phig/index.html)
Number 6 NE11OE000066, funded by CDC. 
Its contents are solely the responsibility of the authors and do not necessarily represent 
the official views of CDC.
