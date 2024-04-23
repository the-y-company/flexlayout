<!-- badges: start -->
<!-- badges: end -->

# flexlayout

A responsibe layout for Shiny. `flexlayout()` creates a three-column
layout where the left and right columns collapse into offcanvas
elements on tablets and mobiles.

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

Funded by [The Association of State and Territorial Health Officials](https://www.astho.org).
