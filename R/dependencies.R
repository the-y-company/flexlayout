flexlayoutDependencies <- function(){ # nolint
  htmltools::htmlDependency(
    "flexlayout",
    utils::packageVersion("flexlayout"),
    script = "index.js",
    package = "flexlayout",
    src = "assets"
  )
}
