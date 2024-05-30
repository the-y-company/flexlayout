#' Layout
#' 
#' Flexible layout for Shiny applications.
#' It splits the page in three columns: left, center, and right.
#' On tablet and mobile the left and right columns are collapsed
#' into offcanvas that can be brought to view by clicking on icons.
#' 
#' @param left,center,right Content of the page.
#' @param left_button,right_button Left and right buttons to open the offcanvas.
#' @param left_width,center_width,right_width Width of the left, center, and right columns.
#'   an integer between 0 and 100 indicating the percentage of the width.
#' 
#' @importFrom shiny div tags p
#' 
#' @export
flexlayout <- function(
  left = NULL,
  center,
  right = NULL,
  left_button = offcanvas_button(shiny::icon("filter")),
  right_button = offcanvas_button(shiny::icon("info")),
  left_width = 22,
  center_width = 56,
  right_width = 22
){
  if(is.null(left) && is.null(center))
    stop("must pass `left`, and/or `right`, they are currently both `NULL`")

  # make the center wider when there is not right column
  if(is.null(right)){
    center_width <- center_width + left_width
    right_width <- 0L
  }

  if(is.null(left)){
    center_width <- center_width + right_width
    left_width <- 0L
  }

  if(!is.null(left_button))
    left_button <- left_button |>
      htmltools::tagAppendAttributes(class = "float-left left-bar-trigger")

  if(!is.null(right_button))
    right_button <- right_button |>
      htmltools::tagAppendAttributes(class = "float-right right-bar-trigger")

  div(
    class = "layout position-relative",
    `data-layout` = sprintf("[%s,%s,%s]", left_width, center_width, right_width),
    flexlayoutDependencies(),
    p(
      class = "d-md-block d-lg-none pb-2",
      style = "min-height:2rem",
      if(!is.null(left_button) && !is.null(left))
        left_button,
      if(!is.null(right_button) && !is.null(right))
        right_button
    ),
    if(!is.null(left))
      div(
        class = "offcanvas offcanvas-start offcanvas-left offcanvas-flexlayout-left",
        tabindex = "-1",
        div(
          class = "offcanvas-header",
          tags$button(
            type = "button",
            class = "btn-close",
            `data-bs-dismiss` = "offcanvas",
            `aria-label` = "Close"
          )
        ),
        div(class = "offcanvas-body")
      ),
    div(
      class = "d-flex",
      div(
        class = "d-none d-lg-block left-bar",
        style = sprintf("width:%s%%", left_width),
        left
      ),
      div(
        class = "center-bar",
        style = sprintf("width:%s%%", center_width),
        center
      ),
      div(
        class = "d-none d-lg-block right-bar",
        style = sprintf("width:%s%%", right_width),
        right
      )
    ),
    if(!is.null(right))
      div(
        class = "offcanvas offcanvas-end offcanvas-right offcanvas-flexlayout-right",
        tabindex = "-1",
        div(
          class = "offcanvas-header",
          tags$button(
            type = "button",
            class = "btn-close",
            `data-bs-dismiss` = "offcanvas",
            `aria-label` = "Close"
          )
        ),
        div(class = "offcanvas-body")
      )
  )
}
