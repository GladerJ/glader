function load(){
    var aa = document.getElementById("text").value; //获取text的值aaa
    var uw = document.getElementById("usewhat").value;
    if(uw == "1"){
        window.open("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+aa+"&fenlei=256&rsv_pq=84b1b99400012d36&rsv_t=0527FlwTXksGfO6auRZlnk1eSbDfs1unDXq4tJuAmWoTsiqmTNyu5sYVMX8&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=8&rsv_sug1=3&rsv_sug7=101&rsv_sug2=0&rsv_btype=i&inputT=926&rsv_sug4=1416");
    }
    else if(uw == "2"){
        window.open("https://www.sogou.com/web?query="+aa+"&_asf=www.sogou.com&_ast=&w=01019900&p=40040100&ie=utf8&from=index-nologin&s_from=index&sut=867&sst0=1661178583300&lkt=0%2C0%2C0&sugsuv=1661178580077445&sugtime=1661178583300");
    }
    else if(uw == "3"){
        window.open("https://cn.bing.com/search?q=%E5%90%83%E5%B1%8E&form=QBLH&sp=-1&pq="+aa+"&sc=10-2&qs=n&sk=&cvid=63C8479C081E49BA87AD379F04830CA7&ghsh=0&ghacc=0&ghpl=");
    }
    else{
        window.open("https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&ssid=&q="+aa);
    }
}