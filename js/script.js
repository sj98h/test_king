$(document).ready(function () {
  //   메인 슬라이더

  //   반응형 슬라이더-----------------------------------------------------
  $(window)
    .resize(function () {
      // 모바일----------------------------------------------
      if (window.innerWidth >= 360 && window.innerWidth <= 460) {
        // 모바일  재생성
        var main_page = 0;
        var sliderX = 0;
        var art_slider = 0;
        var heart_slider = 60;
        var mbti_slider = 60;
        // 메인
        // $("#main_left_bt").click(function () {
        //   main_page = main_page - 1;
        //   if (main_page == -1) {
        //     main_page = 2;
        //   }
        // });
        // $("#main_right_bt").click(function () {
        //   main_page = main_page + 1;
        //   if (main_page == 3) {
        //     main_page = 0;
        //   }
        // });
        // setInterval(function () {
        //   if (main_page == 0) {
        //     $(".main_img").attr({ src: "images/main2.png" });
        //     $(".main_left").attr({ src: "images/main1.png" });
        //     $(".main_right").attr({ src: "images/main3.png" });
        //     $("#main_link").attr({ href: "http://iamdesker.co.kr/" });
        //     $("#main_link_bt").attr({ href: "http://iamdesker.co.kr/" });
        //     $("#main_title").text("데스커");
        //     $("#main_p1").text("What's in my room?");
        //     $("#main_p2").html("나에게 꼬~옥 맞는 <br />책상은?");
        //   }
        //   if (main_page == 1) {
        //     $(".main_img").attr({ src: "images/main3.png" });
        //     $(".main_left").attr({ src: "images/main2.png" });
        //     $(".main_right").attr({ src: "images/main1.png" });
        //     $("#main_link").attr({ href: "http://bns003.keshsurvey.com/" });
        //     $("#main_link_bt").attr({ href: "http://bns003.keshsurvey.com/" });
        //     $("#main_title").text("바다 테스트");
        //     $("#main_p1").text("알쏭달쏭한 바닷속!");
        //     $("#main_p2").html("나의 바다엔 뭐가<br />살까?");
        //   }
        //   if (main_page == 2) {
        //     $(".main_img").attr({ src: "images/main1.png" });
        //     $(".main_left").attr({ src: "images/main3.png" });
        //     $(".main_right").attr({ src: "images/main2.png" });
        //     $("#main_link").attr({ href: "https://facetest.glam.am/" });
        //     $("#main_link_bt").attr({ href: "https://facetest.glam.am/" });
        //     $("#main_title").text("글램");
        //     $("#main_p1").text("관상으로 보는");
        //     $("#main_p2").html("나의 신년 연애 <br />운세는?");
        //   }
        // });
        // 메인 끝
        $("#nature_prev").click(function () {
          sliderX = sliderX + 110;
          if (sliderX > 110) {
            $(".nature_slide>li").addClass("shake");
            $(".nature_slide>li").on(
              "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
              function () {
                $(this).removeClass("shake");
              }
            );
            sliderX = sliderX - 110;
          } else {
            $(".nature_slide").stop().animate({ left: sliderX });
          }
        });
        $("#nature_next").click(function () {
          sliderX = sliderX - 110;

          if (sliderX < -110) {
            $(".nature_slide>li").addClass("shake");
            $(".nature_slide>li").on(
              "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
              function () {
                $(this).removeClass("shake");
              }
            );
            sliderX = sliderX + 110;
          } else {
            $(".nature_slide").stop().animate({ left: sliderX });
          }
        });
        //   예술 슬라이더
        $("#art_prev").click(function () {
          art_slider = art_slider + 110;
          if (art_slider > 220) {
            $(".art_slide>li").addClass("shake");
            $(".art_slide>li").on(
              "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
              function () {
                $(this).removeClass("shake");
              }
            );
            art_slider = art_slider - 110;
          } else {
            $(".art_slide").stop().animate({ left: art_slider });
          }
        });
        $("#art_next").click(function () {
          art_slider = art_slider - 110;

          if (art_slider < -220) {
            $(".art_slide>li").addClass("shake");
            $(".art_slide>li").on(
              "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
              function () {
                $(this).removeClass("shake");
              }
            );
            art_slider = art_slider + 110;
          } else {
            $(".art_slide").stop().animate({ left: art_slider });
          }
        });
        //   마음 슬라이더
        $("#heart_prev").click(function () {
          heart_slider = heart_slider + 110;
          if (heart_slider > 170) {
            $(".heart_slide>li").addClass("shake");
            $(".heart_slide>li").on(
              "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
              function () {
                $(this).removeClass("shake");
              }
            );
            heart_slider = heart_slider - 110;
          } else {
            $(".heart_slide").stop().animate({ left: heart_slider });
          }
        });
        $("#heart_next").click(function () {
          heart_slider = heart_slider - 110;

          if (heart_slider < -160) {
            $(".heart_slide>li").addClass("shake");
            $(".heart_slide>li").on(
              "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
              function () {
                $(this).removeClass("shake");
              }
            );
            heart_slider = heart_slider + 110;
          } else {
            $(".heart_slide").stop().animate({ left: heart_slider });
          }
        });
        //  mbti 슬라이더
        $("#mbti_prev").click(function () {
          mbti_slider = mbti_slider + 110;
          if (mbti_slider > 60) {
            $(".mbti_slide>li").addClass("shake");
            $(".mbti_slide>li").on(
              "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
              function () {
                $(this).removeClass("shake");
              }
            );
            mbti_slider = mbti_slider - 110;
          } else {
            $(".mbti_slide").stop().animate({ left: mbti_slider });
          }
        });
        $("#mbti_next").click(function () {
          mbti_slider = mbti_slider - 110;

          if (mbti_slider < -60) {
            $(".mbti_slide>li").addClass("shake");
            $(".mbti_slide>li").on(
              "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
              function () {
                $(this).removeClass("shake");
              }
            );
            mbti_slider = mbti_slider + 110;
          } else {
            $(".mbti_slide").stop().animate({ left: mbti_slider });
          }
        });
      } else {
        // --------------------------------------------------------
        // else 1920 pc --------------------------------------------
        var pc_main_page = 0;
        var sliderX = 0;
        var art_slider = 0;
        var heart_slider = 162;
        var mbti_slider = 162;
        var heart_first = 0;
        var mbti_first = 0;
        // pc 메인
        // $("#main_left_bt").click(function () {
        //   pc_main_page = pc_main_page - 1;
        //   if (pc_main_page == -1) {
        //     pc_main_page = 2;
        //   }
        // });
        // $("#main_right_bt").click(function () {
        //   pc_main_page = pc_main_page + 1;
        //   if (pc_main_page == 3) {
        //     pc_main_page = 0;
        //   }
        // });
        // setInterval(function () {
        //   $("h1").text(pc_main_page);
        //   if (pc_main_page == 0) {
        //     $(".main_img").attr({ src: "images/main2.png" });
        //     $(".main_left").attr({ src: "images/main1.png" });
        //     $(".main_right").attr({ src: "images/main3.png" });
        //     $("#main_link").attr({ href: "http://iamdesker.co.kr/" });
        //     $("#main_link_bt").attr({ href: "http://iamdesker.co.kr/" });
        //     $("#main_title").text("데스커");
        //     $("#main_p1").text("What's in my room?");
        //     $("#main_p2").html("나에게 꼬~옥 맞는 <br />책상은?");
        //   }
        //   if (pc_main_page == 1) {
        //     $(".main_img").attr({ src: "images/main3.png" });
        //     $(".main_left").attr({ src: "images/main2.png" });
        //     $(".main_right").attr({ src: "images/main1.png" });
        //     $("#main_link").attr({ href: "http://bns003.keshsurvey.com/" });
        //     $("#main_link_bt").attr({ href: "http://bns003.keshsurvey.com/" });
        //     $("#main_title").text("바다 테스트");
        //     $("#main_p1").text("알쏭달쏭한 바닷속!");
        //     $("#main_p2").html("나의 바다엔 뭐가<br />살까?");
        //   }
        //   if (pc_main_page == 2) {
        //     $(".main_img").attr({ src: "images/main1.png" });
        //     $(".main_left").attr({ src: "images/main3.png" });
        //     $(".main_right").attr({ src: "images/main2.png" });
        //     $("#main_link").attr({ href: "https://facetest.glam.am/" });
        //     $("#main_link_bt").attr({ href: "https://facetest.glam.am/" });
        //     $("#main_title").text("글램");
        //     $("#main_p1").text("관상으로 보는");
        //     $("#main_p2").html("나의 신년 연애 <br />운세는?");
        //   }
        // });
        // 메인 끝
        //   환경 슬라이더
        $("#nature_prev").click(function () {
          sliderX = sliderX + 348;
          if (sliderX > 348) {
            $(".nature_slide>li").addClass("shake");
            $(".nature_slide>li").on(
              "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
              function () {
                $(this).removeClass("shake");
              }
            );
            sliderX = sliderX - 348;
          } else {
            $(".nature_slide").stop().animate({ left: sliderX });
          }
        });
        $("#nature_next").click(function () {
          sliderX = sliderX - 348;

          if (sliderX < -348) {
            $(".nature_slide>li").addClass("shake");
            $(".nature_slide>li").on(
              "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
              function () {
                $(this).removeClass("shake");
              }
            );
            sliderX = sliderX + 348;
          } else {
            $(".nature_slide").stop().animate({ left: sliderX });
          }
        });
        //   예술 슬라이더
        $("#art_prev").click(function () {
          art_slider = art_slider + 304;
          if (art_slider > 608) {
            $(".art_slide>li").addClass("shake");
            $(".art_slide>li").on(
              "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
              function () {
                $(this).removeClass("shake");
              }
            );
            art_slider = art_slider - 304;
          } else {
            $(".art_slide").stop().animate({ left: art_slider });
          }
        });
        $("#art_next").click(function () {
          art_slider = art_slider - 304;

          if (art_slider < -608) {
            $(".art_slide>li").addClass("shake");
            $(".art_slide>li").on(
              "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
              function () {
                $(this).removeClass("shake");
              }
            );
            art_slider = art_slider + 304;
          } else {
            $(".art_slide").stop().animate({ left: art_slider });
          }
        });
        //   마음 슬라이더
        $("#heart_prev").click(function () {
          if (heart_first == 0) {
            $(".heart_slide").stop().animate({ left: heart_slider });
            heart_first = 1;
          } else {
            heart_slider = heart_slider + 324;
            if (heart_slider > 486) {
              $(".heart_slide>li").addClass("shake");
              $(".heart_slide>li").on(
                "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function () {
                  $(this).removeClass("shake");
                }
              );
              heart_slider = heart_slider - 324;
            } else {
              $(".heart_slide").stop().animate({ left: heart_slider });
            }
          }
        });
        $("#heart_next").click(function () {
          heart_slider = heart_slider - 324;
          heart_first = 1;
          if (heart_slider < -486) {
            $(".heart_slide>li").addClass("shake");
            $(".heart_slide>li").on(
              "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
              function () {
                $(this).removeClass("shake");
              }
            );
            heart_slider = heart_slider + 324;
          } else {
            $(".heart_slide").stop().animate({ left: heart_slider });
          }
        });
        //  mbti 슬라이더

        $("#mbti_prev").click(function () {
          if (mbti_first == 0) {
            $(".mbti_slide").stop().animate({ left: mbti_slider });
            mbti_first = 1;
          } else {
            mbti_slider = mbti_slider + 324;
            if (mbti_slider > 162) {
              $(".mbti_slide>li").addClass("shake");
              $(".mbti_slide>li").on(
                "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                function () {
                  $(this).removeClass("shake");
                }
              );
              mbti_slider = mbti_slider - 324;
            } else {
              $(".mbti_slide").stop().animate({ left: mbti_slider });
            }
          }
        });
        $("#mbti_next").click(function () {
          mbti_slider = mbti_slider - 324;
          mbti_first = 1;
          if (mbti_slider < -162) {
            $(".mbti_slide>li").addClass("shake");
            $(".mbti_slide>li").on(
              "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
              function () {
                $(this).removeClass("shake");
              }
            );
            mbti_slider = mbti_slider + 324;
          } else {
            $(".mbti_slide").stop().animate({ left: mbti_slider });
          }
        });
      }
    })
    .resize();
});
