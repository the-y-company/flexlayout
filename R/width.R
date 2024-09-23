#' Global
#' 
#' Define width when layout should expand or collapse.
#' 
#' @export
defineGlobal <- function(
  width = 991L
) {
  opts <- jsonlite::toJSON(list(width = width), auto_unbox = TRUE)
  tags$script(
    id = "FLEXLAYOUT-GLOBALS",
    type = "application/json",
    HTML(as.character(opts))
  )
}
