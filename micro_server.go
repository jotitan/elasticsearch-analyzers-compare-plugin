package main
import (
    "net/http"
    "os"
    "logger"
    "path/filepath"
)

/* Minimal server to serve static file available in specific folder */
 func main(){
    if len(os.Args) != 3 {
        logger.GetLogger2().Error("Impossible to start server, need 2 arguments, port and resources folder",os.Args)
        return
    }
    s := server{os.Args[2]}
    s.start(os.Args[1])
}

type server struct{
    resources string
}

func (s server)root(response http.ResponseWriter,request *http.Request){
    http.ServeFile(response,request,filepath.Join(s.resources,request.RequestURI[1:]))
}

func (s server)start(port string){
    server := http.NewServeMux()
    server.HandleFunc("/",s.root)

    logger.GetLogger2().Info("Start server on port",port)
    http.ListenAndServe(":" + port,server)
}