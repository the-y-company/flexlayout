#' Layout
#' 
#' Flexible layout for Shiny applications.
#' It splits the page in three columns: left, center, and right.
#' On tablet and mobile the left and right columns are collapsed
#' into offcanvas that can be brought to view by clicking on icons.
#' 
#' @param left,center,right Content of the page.
#' @param left_icon,right_icon Icon to show on the left and right side of the page.
#' 
#' @importFrom shiny div tags p
#' 
#' @export
flexlayout <- function(
  left,
  center,
  right = NULL,
  left_icon = shiny::icon("filter"),
  right_icon = shiny::icon("info")
){
  if(missing(left) || missing(center))
    stop("must pass `left`, and `center`")

  lw <- 22
  cw <- 56
  rw <- 22

  # make the center wider when there is not right column
  if(is.null(right)){
    lw <- 22
    cw <- 78
    rw <- 0
  }

  div(
    class = "layout",
    flexlayoutDependencies(),
    p(
      class = "d-md-block d-lg-none pb-2",
      tags$a(
        class = "float-left left-bar-trigger cursor cursor-pointer",
        left_icon
      ),
      if(!is.null(right))
        tags$a(
          class = "float-right right-bar-trigger cursor cursor-pointer",
          right_icon
        )
    ),
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
        style = sprintf("width:%s%%", lw),
        left
      ),
      div(
        class = "center-bar",
        style = sprintf("width:%s%%", cw),
        center
      ),
      div(
        class = "d-none d-lg-block right-bar",
        style = sprintf("width:%s%%", rw),
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
