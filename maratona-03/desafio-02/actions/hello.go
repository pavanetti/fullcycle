package actions

import (
	"net/http"

	"github.com/gobuffalo/buffalo"
)

// HelloHandler will respond with "Hello Full Cycle" string
func HelloHandler(c buffalo.Context) error {
	return c.Render(http.StatusOK, r.HTML("hello.html"))
}
