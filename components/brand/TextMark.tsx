import React from "react";

interface TextMarkProps {
  colour: string;
  size: number;
}

export const TextMark: React.FC<TextMarkProps> = ({ colour, size }) => {
  const aspectRatio = 1138 / 512;
  const newWidth = size * 2.175;
  const newHeight = (size / aspectRatio) * 2.175;
  return (
    <svg
      height={newHeight}
      width={newWidth}
      fill="none"
      viewBox="0 0 1138 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M146.557 0C141.343 0 138.736 0 136.249 0.393973C131.261 1.18396 126.531 3.14318 122.446 6.11146C120.408 7.59177 118.565 9.43504 114.878 13.1216L31.6784 96.3216C23.2552 104.745 19.0436 108.956 16.7427 113.472C12.0923 122.599 12.0923 133.401 16.7427 142.528C19.0436 147.044 23.2552 151.255 31.6784 159.678L114.878 242.878C118.565 246.565 120.408 248.408 122.446 249.889C126.531 252.857 131.261 254.816 136.249 255.606C138.736 256 141.343 256 146.557 256H256L320 320C327.778 327.778 331.667 331.667 333.455 334.376C345.928 353.279 335.356 378.802 313.169 383.349C309.99 384 304.49 384 293.49 384H44.8C32.8878 384 26.9317 384 22.1115 385.566C12.3694 388.732 4.73156 396.369 1.56619 406.111C0 410.932 0 416.888 0 428.8V467.2C0 479.112 0 485.068 1.56619 489.889C4.73156 499.631 12.3694 507.268 22.1115 510.434C26.9317 512 32.8878 512 44.8 512H365.443C370.657 512 373.264 512 375.751 511.606C380.739 510.816 385.469 508.857 389.554 505.889C391.592 504.408 393.435 502.565 397.122 498.878L480.322 415.678C488.745 407.255 492.956 403.044 495.257 398.528C499.908 389.401 499.908 378.599 495.257 369.472C492.956 364.956 488.745 360.745 480.322 352.322L397.122 269.122C393.435 265.435 391.592 263.592 389.554 262.111C385.469 259.143 380.739 257.184 375.751 256.394C373.264 256 370.657 256 365.443 256H256L192 192C184.222 184.222 180.333 180.333 178.546 177.624C166.072 158.721 176.644 133.198 198.831 128.651C202.01 128 207.51 128 218.51 128H467.2C479.112 128 485.068 128 489.889 126.434C499.631 123.268 507.268 115.631 510.434 105.889C512 101.068 512 95.1122 512 83.2V44.8C512 32.8878 512 26.9317 510.434 22.1115C507.268 12.3694 499.631 4.73156 489.889 1.56619C485.068 0 479.112 0 467.2 0H146.557Z"
        fill={colour === "black" ? "black" : "white"}
      />
      <path
        d="M1076.98 348.072C1065.03 348.072 1054.36 345.256 1044.98 339.624C1035.59 333.992 1028.25 326.141 1022.96 316.072C1017.67 305.832 1015.02 293.971 1015.02 280.488C1015.02 266.835 1017.58 254.973 1022.7 244.904C1027.99 234.835 1035.33 226.984 1044.72 221.352C1054.28 215.72 1065.2 212.904 1077.49 212.904C1090.12 212.904 1100.87 215.72 1109.74 221.352C1118.62 226.984 1125.36 234.408 1129.97 243.624C1134.75 252.669 1137.14 262.653 1137.14 273.576C1137.14 275.283 1137.14 277.075 1137.14 278.952C1137.14 280.829 1137.05 282.963 1136.88 285.352H1031.15V268.712H1115.89C1115.38 256.936 1111.45 247.72 1104.11 241.064C1096.94 234.408 1087.9 231.08 1076.98 231.08C1069.81 231.08 1063.07 232.787 1056.75 236.2C1050.44 239.443 1045.4 244.307 1041.65 250.792C1037.89 257.107 1036.02 265.043 1036.02 274.6V281.768C1036.02 292.349 1037.89 301.224 1041.65 308.392C1045.57 315.56 1050.61 320.936 1056.75 324.52C1063.07 328.104 1069.81 329.896 1076.98 329.896C1086.02 329.896 1093.45 327.933 1099.25 324.008C1105.22 319.912 1109.57 314.365 1112.3 307.368H1133.55C1131.33 315.219 1127.66 322.216 1122.54 328.36C1117.42 334.333 1111.02 339.112 1103.34 342.696C1095.83 346.28 1087.05 348.072 1076.98 348.072Z"
        fill={colour === "black" ? "black" : "white"}
      />
      <path
        d="M974.338 345C966.658 345 960.002 343.805 954.37 341.416C948.738 339.027 944.386 335.016 941.314 329.384C938.413 323.581 936.962 315.816 936.962 306.088V234.152H914.434V215.976H936.962L939.778 184.744H958.466V215.976H995.842V234.152H958.466V306.088C958.466 314.109 960.087 319.571 963.33 322.472C966.573 325.203 972.29 326.568 980.482 326.568H994.306V345H974.338Z"
        fill={colour === "black" ? "black" : "white"}
      />
      <path
        d="M829.884 348.072C819.473 348.072 810.769 346.28 803.772 342.696C796.775 338.941 791.569 334.077 788.156 328.104C784.743 321.96 783.036 315.304 783.036 308.136C783.036 299.432 785.255 292.093 789.692 286.12C794.3 279.976 800.7 275.368 808.892 272.296C817.255 269.053 827.068 267.432 838.332 267.432H872.38C872.38 259.411 871.1 252.755 868.54 247.464C866.151 242.003 862.567 237.907 857.788 235.176C853.18 232.445 847.377 231.08 840.38 231.08C832.188 231.08 825.105 233.128 819.132 237.224C813.159 241.32 809.489 247.379 808.124 255.4H786.108C787.132 246.184 790.204 238.504 795.324 232.36C800.615 226.045 807.271 221.267 815.292 218.024C823.313 214.611 831.676 212.904 840.38 212.904C852.327 212.904 862.225 215.123 870.076 219.56C878.097 223.827 884.071 229.885 887.996 237.736C891.921 245.416 893.884 254.547 893.884 265.128V345H874.684L873.404 322.216C871.697 325.8 869.479 329.213 866.748 332.456C864.188 335.528 861.116 338.259 857.532 340.648C854.119 342.867 850.108 344.659 845.5 346.024C840.892 347.389 835.687 348.072 829.884 348.072ZM833.212 329.896C839.185 329.896 844.561 328.701 849.34 326.312C854.289 323.752 858.471 320.339 861.884 316.072C865.297 311.635 867.857 306.771 869.564 301.48C871.441 296.189 872.38 290.643 872.38 284.84V284.072H840.124C831.761 284.072 825.02 285.096 819.9 287.144C814.78 289.021 811.111 291.752 808.892 295.336C806.673 298.749 805.564 302.675 805.564 307.112C805.564 311.72 806.588 315.731 808.636 319.144C810.855 322.557 814.012 325.203 818.108 327.08C822.375 328.957 827.409 329.896 833.212 329.896Z"
        fill={colour === "black" ? "black" : "white"}
      />
      <path
        d="M730.9 345V160.68H752.404V345H730.9Z"
        fill={colour === "black" ? "black" : "white"}
      />
      <path
        d="M640.768 348.072C627.627 348.072 616.192 345.683 606.464 340.904C596.736 336.125 589.227 329.469 583.936 320.936C578.645 312.403 576 302.504 576 291.24H598.528C598.528 298.237 600.149 304.723 603.392 310.696C606.635 316.499 611.328 321.192 617.472 324.776C623.787 328.189 631.552 329.896 640.768 329.896C648.789 329.896 655.616 328.616 661.248 326.056C667.051 323.325 671.403 319.656 674.304 315.048C677.376 310.44 678.912 305.235 678.912 299.432C678.912 292.435 677.376 286.803 674.304 282.536C671.403 278.099 667.392 274.515 662.272 271.784C657.152 269.053 651.179 266.664 644.352 264.616C637.696 262.397 630.699 260.008 623.36 257.448C609.195 252.669 598.784 246.781 592.128 239.784C585.472 232.616 582.144 223.315 582.144 211.88C582.144 202.152 584.363 193.619 588.8 186.28C593.408 178.941 599.893 173.224 608.256 169.128C616.789 164.861 626.859 162.728 638.464 162.728C649.899 162.728 659.797 164.861 668.16 169.128C676.693 173.395 683.349 179.283 688.128 186.792C692.907 194.131 695.296 202.664 695.296 212.392H672.768C672.768 207.443 671.488 202.579 668.928 197.8C666.368 193.021 662.443 189.096 657.152 186.024C652.032 182.781 645.547 181.16 637.696 181.16C631.211 180.989 625.408 182.099 620.288 184.488C615.339 186.707 611.413 189.949 608.512 194.216C605.781 198.483 604.416 203.688 604.416 209.832C604.416 215.635 605.611 220.328 608 223.912C610.56 227.496 614.144 230.568 618.752 233.128C623.531 235.517 629.077 237.736 635.392 239.784C641.707 241.832 648.704 244.136 656.384 246.696C665.088 249.597 672.768 253.181 679.424 257.448C686.251 261.544 691.541 266.835 695.296 273.32C699.221 279.805 701.184 288.083 701.184 298.152C701.184 306.685 698.88 314.792 694.272 322.472C689.835 329.981 683.179 336.125 674.304 340.904C665.429 345.683 654.251 348.072 640.768 348.072Z"
        fill={colour === "black" ? "black" : "white"}
      />
    </svg>
  );
};