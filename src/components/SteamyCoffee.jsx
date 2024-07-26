"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTime, useTransform } from "framer-motion";

const SteamyCoffee = () => {
    // const [mounted, setMounted] = useState(false);
    // scrolling
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ container: ref });

    // spring
    const scale = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

    // time
    const time = useTime();
    // console.log(time);
    const timeProgress = useTransform(time, [0, 8000], [0, 0.8]);

    return (
        <div className=" my-0 mx-auto min-h-16 max-h-32 min-w-10 max-w-24 ">
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="80%"
                height="100%"
                viewBox="0 0 659 735"
                fill="none"
                initial="hidden"
                animate="visible"
                transition={{ duration: 3, ease: "easeInOut" }}
            >
                <motion.path
                    // variants={outlineAnimation}
                    style={{ pathLength: scale }}
                    className="stroke-black"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="transparent"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M170.097 469.748C132.081 470.001 128.898 470.154 128.278 471.761C126.888 475.358 126.545 498.087 127.645 513.75C129.232 536.344 132.091 551.964 137.837 569.441C151.324 610.458 174.817 643.298 205.013 663.343L212.781 668.5L147.228 668.757C73.5451 669.046 77.0701 668.632 84.3601 676.143C99.9261 692.181 141.365 708.082 187.045 715.545L197.847 717.31L205.936 726.5L103.959 726.755C14.8851 726.977 1.82413 727.199 0.740127 728.505C-0.247873 729.695 -0.246875 730.306 0.744125 731.5C1.84513 732.826 31.7371 733 258.744 733C485.751 733 515.643 732.826 516.744 731.5C517.737 730.303 517.737 729.697 516.744 728.5C515.669 727.204 508.848 727 466.622 727C439.454 727 417.744 726.612 417.744 726.127C417.744 724.939 424.749 718.988 427.326 717.986C428.471 717.542 431.846 716.882 434.826 716.521C449.992 714.683 461.434 712.858 472.744 710.476C504.787 703.725 537.412 689.244 550.153 676.117C557.349 668.703 560.426 669.048 484.549 668.757L417.588 668.5L423.916 663.807C427.396 661.226 433.731 655.954 437.993 652.09C449.415 641.737 454.964 637.83 467.83 631.082C481.584 623.868 486.616 622.042 505.598 617.378C513.493 615.437 522.618 612.999 525.876 611.958C533.894 609.396 548.241 601.862 553.744 597.323C566.625 586.698 575.587 571.786 578.209 556.619C580.247 544.828 580.145 538.887 577.743 529.496C573.549 513.097 563.175 501.684 547.163 495.853C542.515 494.16 538.883 493.682 530.244 493.627C517.067 493.542 508.392 495.842 498.998 501.914C495.655 504.075 492.666 505.589 492.356 505.279C492.046 504.969 491.176 505.226 490.424 505.851C489.456 506.654 488.867 510.9 488.415 520.32C486.3 564.433 474.11 598.176 448.49 630.838C438.048 644.15 430.242 651.401 413.009 663.796L405.775 669H226.16L217.702 663.829C204.594 655.815 195.988 648.986 186.203 638.831C161.517 613.211 147.19 586.064 138.718 548.852C134.894 532.054 133.744 519.809 133.744 495.894V476H490.744V483.878C490.744 492.505 492.245 495.44 495.578 493.328C496.932 492.47 497.262 490.468 497.342 482.62C497.407 476.263 497.008 472.376 496.173 471.234C494.981 469.603 486.483 469.499 353.075 469.487C275.068 469.48 192.728 469.598 170.097 469.748ZM473.411 492.667C472.179 493.899 472.729 497.743 474.328 499.07C477.445 501.657 481.352 496.642 478.704 493.452C477.45 491.941 474.564 491.513 473.411 492.667ZM521.244 500.069C514.121 501.256 505.379 504.931 500.002 509C495.641 512.3 495.353 512.813 494.968 517.982L494.559 523.465L499.984 518.334C513.68 505.381 531.144 501.862 545.681 509.126C557.062 514.814 562.735 524.491 563.523 539.567C564.125 551.077 562.158 559.831 556.786 569.552C551.597 578.94 546.073 584.966 537.246 590.87C529.201 596.251 523.083 598.826 509.244 602.654C504.294 604.023 496.267 606.242 491.405 607.584C486.544 608.927 480.133 611.177 477.158 612.584C471.807 615.116 460.744 624.283 460.744 626.186C460.744 626.728 462.882 625.962 465.494 624.485C473.719 619.834 487.498 615.077 505.673 610.616C532.91 603.93 545.682 597.551 557.263 584.849C567.181 573.972 573.077 558.398 573.107 543C573.151 521.316 560.637 505.488 539.513 500.508C532.66 498.892 528.853 498.8 521.244 500.069ZM519.744 513.666C512.278 516.271 504.996 521.788 500.255 528.432C494.653 536.282 494.466 536.808 490.728 555.184C486.9 574.002 482.042 588.909 476.226 599.68L471.81 607.859L477.027 605.483C479.896 604.176 488.544 601.48 496.244 599.492C519.963 593.368 524.741 591.545 534.239 584.998C557.152 569.203 565.059 535.381 549.48 519.802C541.967 512.289 530.482 509.919 519.744 513.666ZM471.298 520.913C470.949 521.477 470.262 525.441 469.771 529.72C467.821 546.731 461.747 569.006 454.267 586.574C443.599 611.63 424.607 635.007 400.382 652.898C395.081 656.813 390.744 660.672 390.744 661.473C390.744 662.274 391.582 663.378 392.605 663.926C397.602 666.6 430.041 637.618 444.008 618C452.876 605.544 462.722 585.429 467.194 570.633C471.713 555.678 475.592 536.594 475.96 527.5C476.224 520.989 476.093 520.479 474.088 520.193C472.903 520.024 471.647 520.348 471.298 520.913ZM96.7441 678.016C104.446 684.535 127.202 694.651 147.353 700.514C161.801 704.717 189.212 709.85 204.244 711.168C220.344 712.579 392.323 713.025 414.623 711.713C429.629 710.831 458.417 706.934 472.627 703.862C484.842 701.221 504.669 694.857 516.029 689.93C524.741 686.151 539.082 677.88 540.278 675.944C540.644 675.353 457.207 675.01 317.053 675.027L93.2441 675.054L96.7441 678.016ZM146.102 691.509C145.782 692.343 146.077 693.696 146.758 694.516C147.845 695.826 164.388 695.976 283.119 695.754L418.244 695.5V690.5L282.464 690.246C161.889 690.021 146.619 690.163 146.102 691.509ZM207.744 718.747C207.744 718.883 209.371 720.796 211.36 722.997L214.977 727H407.328L415.669 718.5H311.706C254.527 718.5 207.744 718.611 207.744 718.747ZM526.261 727.981C523.935 730.551 525.71 733 529.898 733C533.508 733 534.605 730.609 532.21 727.963C529.964 725.481 528.519 725.486 526.261 727.981ZM631.994 727.031C630.714 727.546 629.744 728.796 629.744 729.933C629.744 731.031 630.757 732.472 631.994 733.134C633.231 733.796 634.244 734.338 634.244 734.338C634.244 734.338 635.257 733.796 636.494 733.134C639.255 731.656 639.422 728.433 636.81 727.035C634.596 725.85 634.931 725.851 631.994 727.031ZM542.994 727.662C541.214 728.38 541.445 731.671 543.326 732.393C546.404 733.574 553.482 733.021 554.744 731.5C556.85 728.962 554.227 726.988 548.872 727.079C546.326 727.122 543.682 727.385 542.994 727.662ZM563.106 728.5C561.721 732.109 563.413 733 571.654 733C579.924 733 581.308 732.354 580.241 728.991C579.68 727.223 578.719 727 571.645 727C565.489 727 563.551 727.34 563.106 728.5ZM587.826 728.847C585.947 732.357 588.346 733 603.322 733C614.704 733 617.745 732.704 618.744 731.5C619.737 730.303 619.737 729.697 618.744 728.5C617.743 727.294 614.686 727 603.157 727C590.234 727 588.717 727.183 587.826 728.847ZM651.411 727.667C650.169 728.908 650.735 731.896 652.386 732.82C655.943 734.81 660.077 731.311 657.639 728.373C656.454 726.946 652.572 726.506 651.411 727.667Z"
                ></motion.path>
                <motion.path
                    style={{ pathLength: scale }}
                    className="stroke-black"
                    fillOpacity={0.9}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fillRule="evenodd"
                    fill="transparent"
                    clipRule="evenodd"
                    d="M317.373 5.544C306.988 16.181 294.867 37.189 291.499 50.387C287.275 66.942 287.083 84.835 290.993 97.5C296.159 114.236 302.223 123.427 323.729 147.12C340.564 165.668 345.373 173.739 347.904 187.697C350.312 200.978 345.15 217.185 334.966 228.311C328.834 235.01 319.407 242.022 312.621 244.931C307.327 247.2 305.928 249.397 308.279 251.749C309.738 253.207 310.238 253.185 314.166 251.486C322.008 248.096 331.58 241.131 338.701 233.635C355.182 216.284 358.93 196.317 350.015 173.355C346.477 164.242 341.673 157.655 324.97 139.017C304.769 116.475 298.431 105.532 295.398 87.954C292.81 72.959 295.769 53.941 303.132 38.238C306.412 31.245 313.873 19.705 318.481 14.5L321.136 11.5L318.151 17.052C306.186 39.302 303.888 69.655 312.402 92.992C318.396 109.422 329.989 122.66 354.449 141.007C373.718 155.459 384.673 167.701 388.654 179.231C389.464 181.579 390.504 187.129 390.963 191.564C392.79 209.209 385.945 226.86 371.655 241.356C361.504 251.654 355.517 255.87 331.323 269.759C294.866 290.688 283.52 299.629 270.672 317.557C259.574 333.045 255.415 353.735 259.887 371.22C262.952 383.204 273.825 403 277.343 403C278.097 403 279.262 402.339 279.932 401.532C280.928 400.332 280.141 398.461 275.62 391.282C263.191 371.544 261.209 352.939 269.488 333.709C278.776 312.134 295.414 297.478 337.798 273.535C358.722 261.714 368.012 254.957 378.056 244.254C391.333 230.107 397.467 214.958 397.394 196.5C397.335 181.8 393.381 170.507 384.456 159.549C378.591 152.349 374.48 148.549 363.033 139.748C326.774 111.87 317.421 98.807 313.914 71.144C312.923 63.325 313.903 50.836 316.084 43.5L317.273 39.5L318.606 48.465C320.398 60.518 323.129 68.299 328.987 78.047C340.178 96.667 352.428 108.282 383.304 129.547C407.184 145.994 419.516 161.029 425.919 181.5C428.479 189.687 429.432 206.461 427.821 215C426.311 223.008 421.601 234.551 416.805 242C410.079 252.444 393.381 268.229 378.177 278.515C337.319 306.156 323.077 320.119 311.805 343.587C305.111 357.525 302.815 366.75 302.22 382.106C301.702 395.466 302.053 398.065 306.936 417C308.567 423.325 310.148 429.738 310.449 431.25C310.865 433.339 311.577 434 313.411 434C316.234 434 317.348 431.502 316.384 427.335C316.023 425.776 314.138 419.1 312.195 412.5C308.916 401.359 308.664 399.534 308.671 387C308.678 375.701 309.099 371.917 311.251 363.792C315.751 346.801 324.925 331.14 338.377 317.478C348.11 307.595 355.046 302.101 373.026 290.033C401.581 270.868 410.725 262.675 421.301 246.781C427.773 237.053 430.429 231.244 433.048 221.09C435.381 212.045 435.587 196.456 433.516 185.637C429.306 163.629 414.017 143.093 388.427 125.072C356.577 102.643 347.383 94.424 337.325 79.386C324.026 59.504 320.734 38.43 327.431 16.051C328.821 11.405 329.959 7.087 329.959 6.457C329.959 4.781 325.614 0 324.091 0C323.373 0 320.35 2.495 317.373 5.544ZM267.244 70.685C266.812 72.233 266.494 80.25 266.537 88.5C266.609 102.095 266.877 104.296 269.405 112C272.962 122.84 276.543 129.918 282.44 137.762C287.609 144.639 290.505 147.111 292.496 146.347C295.243 145.293 294.949 142.731 291.665 139.096C283.793 130.383 277.715 119.119 274.314 106.942C272.933 101.997 272.509 96.782 272.487 84.5C272.459 68.754 272.424 68.495 270.244 68.185C268.544 67.943 267.847 68.524 267.244 70.685ZM424.626 126.667C422.995 128.297 424.446 130.739 431.506 138.244C454.693 162.892 461.534 207.516 447.029 239.506C441.686 251.29 433.228 263.013 422.098 274.061C410.005 286.066 406.241 288.776 381.936 302.979C361.928 314.672 354.444 319.805 345.982 327.639C332.218 340.382 322.855 357.332 318.846 376.762C317.7 382.315 317.738 383.207 319.179 384.649C321.83 387.3 323.7 385.576 324.966 379.314C326.561 371.43 330.667 359.603 333.734 354.06C338.354 345.711 341.647 341.568 350.125 333.432C360.274 323.693 371.535 315.854 389.459 306.052C411.959 293.746 429.631 278.699 441.809 261.479C455.909 241.542 461.239 224.805 460.895 201.547C460.626 183.334 458.023 171.487 450.957 156.308C442.588 138.332 428.65 122.642 424.626 126.667ZM310.209 173.718C308.33 174.392 308.684 176.738 311.549 182.594C315.24 190.139 315.75 198.037 313.107 206.737C309.537 218.493 303.312 226.551 282.1 246.873C256.016 271.863 247.753 284.463 243.427 305.845C241.199 316.863 241.66 334.13 244.253 336.722C245.62 338.09 246.37 338.224 247.728 337.345C248.68 336.728 249.337 335.385 249.187 334.362C246.82 318.172 248.766 304.392 255.38 290.5C261.119 278.446 266.959 270.843 280.238 258.137C302.539 236.799 306.852 232.226 311.754 224.717C317.575 215.799 319.816 209.897 320.643 201.3C321.942 187.786 315.855 171.694 310.209 173.718ZM460.649 255.154C459.719 255.674 458.959 256.75 458.959 257.546C458.959 262.425 452.02 278.031 445.639 287.5C435.235 302.941 419.904 315.552 385.653 336.844C364.311 350.111 351.838 362.373 344.423 377.377C340.111 386.101 339.017 391.973 341.343 393.903C343.764 395.913 345.608 394.586 346.302 390.336C347.235 384.616 355.592 370.64 362.614 363.055C369.344 355.786 380.506 347.498 400.051 335.255C431.211 315.738 445.263 302.612 456.452 282.569C460.508 275.304 466.202 258.796 465.385 256.669C464.599 254.62 462.692 254.01 460.649 255.154Z"
                ></motion.path>
            </motion.svg>
        </div>
    );
};

export default SteamyCoffee;
