flexlayoutDependencies <- function(){ # nolint
  htmltools::htmlDependency(
    "flexlayout",
    utils::packageVersion("flexlayout"),
    script = "index.js",
    stylesheet = "styles.css",
    package = "flexlayout",
    src = "assets"
  )
}
