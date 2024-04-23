# Get Started

The flexlayout package comprises of a single function and as
such is relative easy to use.

The three core arguments of the `flexlayout()` function are
`left`, `center`, and `right`. They respectively 

```r
library(shiny)
library(flexlayout)

ui <- fluidPage(
  theme = bslib::bs_theme(5L),
  flexlayout(
    left = div(
      h2("LEFT")
    ),
    center = div(
      h2("CENTER")
    ),
    right = div(
      h2("RIGHT")
    )
  )
)

server <- function(input, output, session) {}

shinyApp(ui, server)
```

To see the effect of the layout narrow your browser until it reaches
the width of a table or less.

## Example

In the [Astho's Profile dashboard](https://www.astho.org/) that
was presented at the [Shinconf 2024](https://www.shinyconf.com/shinyconf-2024-agenda#sz-tab-45401),
flexlayout is used to display inputs on the `left`,
a `Visualisation` in the center,
and context about the Visualisation on the `right`.

```r
library(shiny)
library(flexlayout)

ui <- fluidPage(
  theme = bslib::bs_theme(5L),
  flexlayout(
    left = div(
      h2("Inputs"),
      selectInput(
        "specie",
        "Specie",
        choices = c("setosa", "versicolor", "virginica")
      )
    ),
    center = div(
      h2("Visualisation"),
      plotOutput("plot")
    ),
    right = div(
      h2("Context"),
      uiOutput("context")
    )
  )
)

server <- function(input, output, session) {
  dataset <- reactive({
    iris[iris$Species == input$specie, ]
  }) 

  output$plot <- renderPlot({
    plot(dataset()[, c("Petal.Length", "Petal.Width")])
  })

  output$context <- renderUI({
    p(
      "The plot displays the petal length and width of the",
      strong(input$specie),
      "of iris."
    )
  })
}

shinyApp(ui, server)
```

Note that you can customise the `left_icon` and `right_icon`
displayed when the dashboard is viewed on a smaller screen.
