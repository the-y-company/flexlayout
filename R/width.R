#' Global
#' 
#' Define width when layout should expand or collapse.
#' 
#' @export
defineGlobal <- function(
  width = 991L
) {
  opts <- jsonlite::toJSON(list(width = width), auto_unbox = TRUE)

  style <- sprintf(
    ".l-lg-block {
      display: block !important;
    }

    .l-lg-none {
      display: none !important;
    }

    @media (max-width: %spx) {
      .l-md-block {
        display: block !important;
      }
      .l-md-none {
        display: none !important;
      }
    }",
    width
  )

  shiny::singleton(
    tags$head(
      tags$script(
        id = "FLEXLAYOUT-GLOBALS",
        type = "application/json",
        HTML(as.character(opts))
      ),
      tags$style(shiny::HTML(style))
    )
  )
}
