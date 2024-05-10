#' Button
#' 
#' Button to trigger offcanvas. 
#' This is just for convenience you can use any button or clickable element.
#' 
#' @param ... Content of button
#' @param class Any additional classes to pass to the button.
#' 
#' @importFrom shiny tags
#' 
#' @export
offcanvas_button <- function(..., class = ""){
  tags$button(
    class = sprintf("btn cursor cursor-pointer %s", class) |> trimws(),
    role = "button",
    ...
  )
}
