$(function(){


    //아이디 중복체크
    $("button[type=button]").click(function(){

        var inputUID = $("#uID").val().trim(); //form화면에서 입력한 ID
        var regIDList = ["test01","guest","member03"]; //가입된 아이디를 의미

        var idUseChk= true;

        $.each(regIDList,function(i,v){
//            alert((i+1)+"번째 값 비교 결과 : "+(inputUID==v));
            if(inputUID==v) {
                idUseChk = false;
            }
        });

        var msg;
        if(idUseChk){
//            alert("사용가능합니다");
            msg="사용가능";
        }else{
//            alert("사용중인 ID입니다");
            msg="사용중인 ID";
        }

        var spanchk = $("#uID").next().is("span");

        if(spanchk){
            $("span#idChkMsg").remove();
        }

        $("<span id='idChkMsg'>"+msg+"</span>").insertAfter("#uID");
        //$("A").insertAfter("B"); 요소A를 요소B 뒤로 이동하세요




        //비밀번호 일관성(동일성)검사
        var uPW = $("#uPW").val().trim();
        var uPW_Re = $("#uPW_Re").val().trim();

        var pwChkmsg;
        if(uPW==uPW_Re){
            pwChkmsg = "비밀번호 일치";
        }else{
            pwChkmsg = "불일치";
        }

        var pwspanchk = $("#uPW_Re").next().is("span");

        if(pwspanchk){
            $("span#pwChkmsg").remove();
        }

        $("<span id='pwChkmsg'>"+pwChkmsg+"</span>").insertAfter("#uPW_Re");
    });


    //입력취소 클릭 이벤트 중복 제거
    $("button[type=reset]").click(function(){
        $("span#idChkMag").remove();
    });




    //비밀번호 보기
    $("input#chkbox").click(function(){ //$(":checked") -> 체크박스에서 체크된것 의미함
       var chked = $(this).prop("checked");

        if (chked){
            $("input.PW").attr("type","text");
        }else {
            $("input.PW").attr("type","password");
        }
    });


//    추가내용(포커스 적용)

    $("#uID").focusout(function(){
        var inputUID = $("#uID").val().trim(); //form화면에서 입력한 ID
        var regIDList = ["test01","guest","member03"]; //가입된 아이디를 의미

        var idUseChk= true;

        $.each(regIDList,function(i,v){
//            alert((i+1)+"번째 값 비교 결과 : "+(inputUID==v));
            if(inputUID==v) {
                idUseChk = false;
            }
        });

        var msg;
        if(idUseChk){
//            alert("사용가능합니다");
            msg="사용가능";
        }else{
//            alert("사용중인 ID입니다");
            msg="사용중인 ID";
        }

        var spanchk = $("#uID").next().is("span");

        if(spanchk){
            $("span#idChkMsg").remove();
        }

        $("<span id='idChkMsg'>"+msg+"</span>").insertAfter("#uID");
    });

















});
