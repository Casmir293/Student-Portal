<template>
  <section>
    <section>
      <v-app>
        <!-- header -->
        <div
          :elevation="2"
          class="bg-myPurple px-sm-4 py-2 px-3 d-flex align-center justify-end"
        >
          <v-avatar color="deep-purple-darken-4">
            <v-icon size="40" icon="mdi-account-circle"></v-icon>
          </v-avatar>
          <div class="px-3">
            <div class="text-caption">Welcome</div>
            <div class="font-weight-bold">Casmir Onyeka</div>
          </div>
          <v-icon icon="mdi-logout"></v-icon>
        </div>

        <!-- hero -->
        <v-card class="bg-myPurple rounded-0 pt-4">
          <v-card-item>
            <div class="text-overline mb-1 text-grey">January 2, 2024</div>
            <div class="text-h6 mb-1 font-weight-bold text-center">
              Welcome back, Casmir!
            </div>
            <div class="text-caption text-grey text-center">
              Always stay updated in your student portal
            </div>
            <div class="position-relative pt-3">
              <img
                src="../assets/images/student.png"
                alt="student"
                class="w-100"
              />
              <img
                src="../assets/images/Scholarcap.png"
                alt="Scholarcap"
                class="w-50 position-absolute"
                style="left: -5%; bottom: 35%"
              />
            </div>
          </v-card-item>
        </v-card>

        <!-- content -->
        <section class="px-4 py-8 bg-grey-lighten-4">
          <!-- finance -->
          <p class="pb-8 font-weight-bold">Finance</p>
          <section>
            <v-card class="mx-auto text-center rounded-lg py-3" max-width="200">
              <v-card-item>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="92"
                    height="66"
                    viewBox="0 0 92 66"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_231_71)">
                      <path
                        d="M47.6718 58.4648V51.2098C62.5321 54.7606 71.3051 54.3889 87.364 51.2065V58.4538C87.364 58.7942 87.1213 59.0905 86.7875 59.1616C71.3501 62.4488 62.7175 62.4998 48.2356 59.1696C47.9076 59.0942 47.6718 58.8006 47.6718 58.4648Z"
                        fill="#2937B1"
                        stroke="#2937B1"
                        stroke-width="0.131615"
                      />
                      <g filter="url(#filter1_d_231_71)">
                        <ellipse
                          cx="67.5179"
                          cy="50.936"
                          rx="19.9119"
                          ry="3.63609"
                          fill="#2937B1"
                        />
                        <path
                          d="M87.364 50.936C87.364 51.1607 87.2395 51.3894 86.9814 51.6197C86.7236 51.8497 86.3396 52.0747 85.8389 52.2909C84.838 52.723 83.3856 53.1137 81.5859 53.4423C77.9875 54.0994 73.0137 54.5062 67.5179 54.5062C62.0221 54.5062 57.0482 54.0994 53.4498 53.4423C51.6501 53.1137 50.1977 52.723 49.1968 52.2909C48.6961 52.0747 48.3121 51.8497 48.0543 51.6197C47.7963 51.3894 47.6718 51.1607 47.6718 50.936C47.6718 50.7112 47.7963 50.4825 48.0543 50.2523C48.3121 50.0222 48.6961 49.7972 49.1968 49.581C50.1977 49.1489 51.6501 48.7582 53.4498 48.4296C57.0482 47.7725 62.0221 47.3657 67.5179 47.3657C73.0137 47.3657 77.9875 47.7725 81.5859 48.4296C83.3856 48.7582 84.838 49.1489 85.8389 49.581C86.3396 49.7972 86.7236 50.0222 86.9814 50.2523C87.2395 50.4825 87.364 50.7112 87.364 50.936Z"
                          stroke="white"
                          stroke-opacity="0.2"
                          stroke-width="0.131615"
                        />
                      </g>
                    </g>
                    <g filter="url(#filter2_d_231_71)">
                      <path
                        d="M2.63612 58.4648V51.2098C17.4965 54.7606 26.2695 54.3889 42.3283 51.2065V58.4538C42.3283 58.7942 42.0856 59.0905 41.7519 59.1616C26.3144 62.4488 17.6819 62.4998 3.19998 59.1696C2.87199 59.0942 2.63612 58.8006 2.63612 58.4648Z"
                        fill="#2937B1"
                        stroke="#2937B1"
                        stroke-width="0.131615"
                      />
                      <g filter="url(#filter3_d_231_71)">
                        <ellipse
                          cx="22.4822"
                          cy="50.936"
                          rx="19.9119"
                          ry="3.63609"
                          fill="#2937B1"
                        />
                        <path
                          d="M42.3283 50.936C42.3283 51.1607 42.2038 51.3894 41.9458 51.6197C41.688 51.8497 41.304 52.0747 40.8033 52.2909C39.8024 52.723 38.35 53.1137 36.5502 53.4423C32.9519 54.0994 27.978 54.5062 22.4822 54.5062C16.9864 54.5062 12.0126 54.0994 8.4142 53.4423C6.61446 53.1137 5.16208 52.723 4.16117 52.2909C3.66047 52.0747 3.27646 51.8497 3.01867 51.6197C2.76062 51.3894 2.63612 51.1607 2.63612 50.936C2.63612 50.7112 2.76062 50.4825 3.01867 50.2523C3.27646 50.0222 3.66047 49.7972 4.16117 49.581C5.16208 49.1489 6.61446 48.7582 8.4142 48.4296C12.0126 47.7725 16.9864 47.3657 22.4822 47.3657C27.978 47.3657 32.9519 47.7725 36.5502 48.4296C38.35 48.7582 39.8024 49.1489 40.8033 49.581C41.304 49.7972 41.688 50.0222 41.9458 50.2523C42.2038 50.4825 42.3283 50.7112 42.3283 50.936Z"
                          stroke="white"
                          stroke-opacity="0.2"
                          stroke-width="0.131615"
                        />
                      </g>
                    </g>
                    <g filter="url(#filter4_d_231_71)">
                      <path
                        d="M47.6718 46.9505V39.6955C62.5321 43.2464 71.3051 42.8746 87.364 39.6922V46.9395C87.364 47.2799 87.1213 47.5762 86.7875 47.6473C71.3501 50.9345 62.7175 50.9855 48.2356 47.6553C47.9076 47.5799 47.6718 47.2864 47.6718 46.9505Z"
                        fill="#2937B1"
                        stroke="#2937B1"
                        stroke-width="0.131615"
                      />
                      <g filter="url(#filter5_d_231_71)">
                        <ellipse
                          cx="67.5179"
                          cy="39.4217"
                          rx="19.9119"
                          ry="3.63609"
                          fill="#2937B1"
                        />
                        <path
                          d="M87.364 39.4217C87.364 39.6464 87.2395 39.8751 86.9814 40.1054C86.7236 40.3354 86.3396 40.5604 85.8389 40.7766C84.838 41.2087 83.3856 41.5994 81.5859 41.928C77.9875 42.5851 73.0137 42.992 67.5179 42.992C62.0221 42.992 57.0482 42.5851 53.4498 41.928C51.6501 41.5994 50.1977 41.2087 49.1968 40.7766C48.6961 40.5604 48.3121 40.3354 48.0543 40.1054C47.7963 39.8751 47.6718 39.6464 47.6718 39.4217C47.6718 39.1969 47.7963 38.9683 48.0543 38.738C48.3121 38.5079 48.6961 38.2829 49.1968 38.0668C50.1977 37.6346 51.6501 37.244 53.4498 36.9153C57.0482 36.2582 62.0221 35.8514 67.5179 35.8514C73.0137 35.8514 77.9875 36.2582 81.5859 36.9153C83.3856 37.244 84.838 37.6346 85.8389 38.0668C86.3396 38.2829 86.7236 38.5079 86.9814 38.738C87.2395 38.9683 87.364 39.1969 87.364 39.4217Z"
                          stroke="white"
                          stroke-opacity="0.2"
                          stroke-width="0.131615"
                        />
                      </g>
                    </g>
                    <g filter="url(#filter6_d_231_71)">
                      <path
                        d="M2.63612 46.9505V39.6955C17.4965 43.2464 26.2695 42.8746 42.3283 39.6922V46.9395C42.3283 47.2799 42.0856 47.5762 41.7519 47.6473C26.3144 50.9345 17.6819 50.9855 3.19998 47.6553C2.87199 47.5799 2.63612 47.2864 2.63612 46.9505Z"
                        fill="#2937B1"
                        stroke="#2937B1"
                        stroke-width="0.131615"
                      />
                      <g filter="url(#filter7_d_231_71)">
                        <ellipse
                          cx="22.4822"
                          cy="39.4217"
                          rx="19.9119"
                          ry="3.63609"
                          fill="#2937B1"
                        />
                        <path
                          d="M42.3283 39.4217C42.3283 39.6464 42.2038 39.8751 41.9458 40.1054C41.688 40.3354 41.304 40.5604 40.8033 40.7766C39.8024 41.2087 38.35 41.5994 36.5502 41.928C32.9519 42.5851 27.978 42.992 22.4822 42.992C16.9864 42.992 12.0126 42.5851 8.4142 41.928C6.61446 41.5994 5.16208 41.2087 4.16117 40.7766C3.66047 40.5604 3.27646 40.3354 3.01867 40.1054C2.76062 39.8751 2.63612 39.6464 2.63612 39.4217C2.63612 39.1969 2.76062 38.9683 3.01867 38.738C3.27646 38.5079 3.66047 38.2829 4.16117 38.0668C5.16208 37.6346 6.61446 37.244 8.4142 36.9153C12.0126 36.2582 16.9864 35.8514 22.4822 35.8514C27.978 35.8514 32.9519 36.2582 36.5502 36.9153C38.35 37.244 39.8024 37.6346 40.8033 38.0668C41.304 38.2829 41.688 38.5079 41.9458 38.738C42.2038 38.9683 42.3283 39.1969 42.3283 39.4217Z"
                          stroke="#E2D4F7"
                          stroke-width="0.131615"
                        />
                      </g>
                      <g filter="url(#filter8_f_231_71)">
                        <ellipse
                          cx="22.768"
                          cy="39.5688"
                          rx="10.6918"
                          ry="0.822448"
                          fill="#E2D4F7"
                        />
                      </g>
                    </g>
                    <g filter="url(#filter9_d_231_71)">
                      <path
                        d="M47.6542 35.471V28.216C62.5146 31.7668 71.2875 31.3951 87.3464 28.2127V35.46C87.3464 35.8004 87.1037 36.0967 86.7699 36.1678C71.3325 39.455 62.6999 39.506 48.218 36.1758C47.8901 36.1004 47.6542 35.8069 47.6542 35.471Z"
                        fill="#2937B1"
                        stroke="#2937B1"
                        stroke-width="0.131615"
                      />
                      <g filter="url(#filter10_d_231_71)">
                        <ellipse
                          cx="67.5003"
                          cy="27.9421"
                          rx="19.9119"
                          ry="3.63609"
                          fill="#2937B1"
                        />
                        <path
                          d="M87.3464 27.9421C87.3464 28.1668 87.2219 28.3955 86.9638 28.6258C86.706 28.8558 86.322 29.0808 85.8213 29.297C84.8204 29.7291 83.368 30.1198 81.5683 30.4484C77.9699 31.1055 72.9961 31.5123 67.5003 31.5123C62.0045 31.5123 57.0306 31.1055 53.4323 30.4484C51.6325 30.1198 50.1801 29.7291 49.1792 29.297C48.6785 29.0808 48.2945 28.8558 48.0367 28.6258C47.7787 28.3955 47.6542 28.1668 47.6542 27.9421C47.6542 27.7173 47.7787 27.4886 48.0367 27.2584C48.2945 27.0283 48.6785 26.8033 49.1792 26.5871C50.1801 26.155 51.6325 25.7643 53.4323 25.4357C57.0306 24.7786 62.0045 24.3718 67.5003 24.3718C72.9961 24.3718 77.9699 24.7786 81.5683 25.4357C83.368 25.7643 84.8204 26.155 85.8213 26.5871C86.322 26.8033 86.706 27.0283 86.9638 27.2584C87.2219 27.4886 87.3464 27.7173 87.3464 27.9421Z"
                          stroke="white"
                          stroke-opacity="0.2"
                          stroke-width="0.131615"
                        />
                      </g>
                    </g>
                    <g filter="url(#filter11_d_231_71)">
                      <path
                        d="M47.6542 24.0259V16.7709C62.5146 20.3218 71.2875 19.95 87.3464 16.7677V24.0149C87.3464 24.3553 87.1037 24.6516 86.7699 24.7227C71.3325 28.0099 62.6999 28.0609 48.218 24.7307C47.8901 24.6553 47.6542 24.3618 47.6542 24.0259Z"
                        fill="#2937B1"
                        stroke="#2937B1"
                        stroke-width="0.131615"
                      />
                      <g filter="url(#filter12_d_231_71)">
                        <ellipse
                          cx="67.5003"
                          cy="16.4971"
                          rx="19.9119"
                          ry="3.63609"
                          fill="#2937B1"
                        />
                        <path
                          d="M87.3464 16.4971C87.3464 16.7218 87.2219 16.9505 86.9638 17.1808C86.706 17.4108 86.322 17.6358 85.8213 17.852C84.8204 18.2841 83.368 18.6748 81.5683 19.0034C77.9699 19.6605 72.9961 20.0673 67.5003 20.0673C62.0045 20.0673 57.0306 19.6605 53.4323 19.0034C51.6325 18.6748 50.1801 18.2841 49.1792 17.852C48.6785 17.6358 48.2945 17.4108 48.0367 17.1808C47.7787 16.9505 47.6542 16.7218 47.6542 16.4971C47.6542 16.2723 47.7787 16.0436 48.0367 15.8134C48.2945 15.5833 48.6785 15.3583 49.1792 15.1421C50.1801 14.71 51.6325 14.3193 53.4323 13.9907C57.0306 13.3336 62.0045 12.9268 67.5003 12.9268C72.9961 12.9268 77.9699 13.3336 81.5683 13.9907C83.368 14.3193 84.8204 14.71 85.8213 15.1421C86.322 15.3583 86.706 15.5833 86.9638 15.8134C87.2219 16.0436 87.3464 16.2723 87.3464 16.4971Z"
                          stroke="white"
                          stroke-opacity="0.2"
                          stroke-width="0.131615"
                        />
                      </g>
                    </g>
                    <g filter="url(#filter13_d_231_71)">
                      <path
                        d="M42.0658 13.452V6.19695C56.9262 9.7478 65.6992 9.37603 81.758 6.19368V13.441C81.758 13.7814 81.5153 14.0777 81.1816 14.1487C65.7441 17.436 57.1115 17.4869 42.6297 14.1568C42.3017 14.0813 42.0658 13.7878 42.0658 13.452Z"
                        fill="#2937B1"
                        stroke="#2937B1"
                        stroke-width="0.131615"
                      />
                      <g filter="url(#filter14_d_231_71)">
                        <ellipse
                          cx="61.9119"
                          cy="5.92308"
                          rx="19.9119"
                          ry="3.63609"
                          fill="#2937B1"
                        />
                        <path
                          d="M81.758 5.92308C81.758 6.14785 81.6335 6.3765 81.3755 6.60678C81.1177 6.83683 80.7337 7.06182 80.2329 7.27799C79.232 7.71011 77.7797 8.1008 75.9799 8.42944C72.3815 9.08654 67.4077 9.49336 61.9119 9.49336C56.4161 9.49336 51.4423 9.08654 47.8439 8.42944C46.0442 8.1008 44.5918 7.71011 43.5909 7.27799C43.0902 7.06182 42.7062 6.83683 42.4484 6.60678C42.1903 6.3765 42.0658 6.14785 42.0658 5.92308C42.0658 5.69831 42.1903 5.46965 42.4484 5.23938C42.7062 5.00933 43.0902 4.78434 43.5909 4.56817C44.5918 4.13604 46.0442 3.74536 47.8439 3.41671C51.4423 2.75962 56.4161 2.3528 61.9119 2.3528C67.4077 2.3528 72.3815 2.75962 75.9799 3.41671C77.7797 3.74536 79.232 4.13604 80.2329 4.56817C80.7337 4.78434 81.1177 5.00933 81.3755 5.23938C81.6335 5.46965 81.758 5.69831 81.758 5.92308Z"
                          stroke="white"
                          stroke-opacity="0.2"
                          stroke-width="0.131615"
                        />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_231_71"
                        x="46.553"
                        y="46.5102"
                        width="44.5619"
                        height="19.1512"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="1.31615" dy="1.57937" />
                        <feGaussianBlur stdDeviation="1.18453" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.228976 0 0 0 0 0.34229 0 0 0 0 0.504167 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_71"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_71"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_d_231_71"
                        x="45.5001"
                        y="45.9837"
                        width="44.0354"
                        height="11.4838"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="0.789687" />
                        <feGaussianBlur stdDeviation="1.05292" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.6825 0 0 0 0 0.782885 0 0 0 0 0.9 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_71"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_71"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter2_d_231_71"
                        x="1.5174"
                        y="46.5102"
                        width="44.5619"
                        height="19.1512"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="1.31615" dy="1.57937" />
                        <feGaussianBlur stdDeviation="1.18453" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.228976 0 0 0 0 0.34229 0 0 0 0 0.504167 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_71"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_71"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter3_d_231_71"
                        x="0.46448"
                        y="45.9837"
                        width="44.0354"
                        height="11.4838"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="0.789687" />
                        <feGaussianBlur stdDeviation="1.05292" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.6825 0 0 0 0 0.782885 0 0 0 0 0.9 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_71"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_71"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter4_d_231_71"
                        x="46.553"
                        y="34.9959"
                        width="44.5619"
                        height="19.1512"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="1.31615" dy="1.57937" />
                        <feGaussianBlur stdDeviation="1.18453" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.228976 0 0 0 0 0.34229 0 0 0 0 0.504167 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_71"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_71"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter5_d_231_71"
                        x="45.5001"
                        y="34.4694"
                        width="44.0354"
                        height="11.4838"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="0.789687" />
                        <feGaussianBlur stdDeviation="1.05292" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.6825 0 0 0 0 0.782885 0 0 0 0 0.9 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_71"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_71"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter6_d_231_71"
                        x="1.5174"
                        y="34.9959"
                        width="44.5619"
                        height="19.1512"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="1.31615" dy="1.57937" />
                        <feGaussianBlur stdDeviation="1.18453" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.228976 0 0 0 0 0.34229 0 0 0 0 0.504167 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_71"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_71"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter7_d_231_71"
                        x="0.46448"
                        y="34.4694"
                        width="44.0354"
                        height="11.4838"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="0.789687" />
                        <feGaussianBlur stdDeviation="1.05292" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.6825 0 0 0 0 0.782885 0 0 0 0 0.9 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_71"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_71"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter8_f_231_71"
                        x="6.81159"
                        y="33.4818"
                        width="31.9127"
                        height="12.1741"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="2.63229"
                          result="effect1_foregroundBlur_231_71"
                        />
                      </filter>
                      <filter
                        id="filter9_d_231_71"
                        x="46.5355"
                        y="23.5163"
                        width="44.5619"
                        height="19.1513"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="1.31615" dy="1.57937" />
                        <feGaussianBlur stdDeviation="1.18453" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.228976 0 0 0 0 0.34229 0 0 0 0 0.504167 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_71"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_71"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter10_d_231_71"
                        x="45.4825"
                        y="22.9898"
                        width="44.0354"
                        height="11.4838"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="0.789687" />
                        <feGaussianBlur stdDeviation="1.05292" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.6825 0 0 0 0 0.782885 0 0 0 0 0.9 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_71"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_71"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter11_d_231_71"
                        x="46.5355"
                        y="12.0713"
                        width="44.5619"
                        height="19.1513"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="1.31615" dy="1.57937" />
                        <feGaussianBlur stdDeviation="1.18453" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.228976 0 0 0 0 0.34229 0 0 0 0 0.504167 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_71"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_71"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter12_d_231_71"
                        x="45.4825"
                        y="11.5448"
                        width="44.0354"
                        height="11.4838"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="0.789687" />
                        <feGaussianBlur stdDeviation="1.05292" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.6825 0 0 0 0 0.782885 0 0 0 0 0.9 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_71"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_71"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter13_d_231_71"
                        x="40.9471"
                        y="1.4973"
                        width="44.5619"
                        height="19.1513"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="1.31615" dy="1.57937" />
                        <feGaussianBlur stdDeviation="1.18453" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.228976 0 0 0 0 0.34229 0 0 0 0 0.504167 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_71"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_71"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter14_d_231_71"
                        x="39.8942"
                        y="0.970846"
                        width="44.0354"
                        height="11.4838"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="0.789687" />
                        <feGaussianBlur stdDeviation="1.05292" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.6825 0 0 0 0 0.782885 0 0 0 0 0.9 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_71"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_71"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <div class="font-weight-bold mb-1">N250,000</div>
                  <div class="text-caption text-grey">Total Payable</div>
                </div>
              </v-card-item>
            </v-card>

            <v-card
              class="mx-auto text-center rounded-lg py-3 my-5"
              max-width="200"
            >
              <v-card-item>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="78"
                    height="105"
                    viewBox="0 0 78 105"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_231_141)">
                      <path
                        d="M61.4807 4.41983C61.4807 3.63568 62.1164 3 62.9005 3H70.4795C71.2636 3 71.8993 3.63568 71.8993 4.41983V98.716C71.8993 98.8729 71.7722 99 71.6154 99H61.7647C61.6078 99 61.4807 98.8729 61.4807 98.716V4.41983Z"
                        fill="#2937B1"
                      />
                    </g>
                    <g filter="url(#filter1_d_231_141)">
                      <path
                        d="M46.969 47.5826C46.969 46.7985 47.6047 46.1628 48.3888 46.1628H55.9678C56.7519 46.1628 57.3876 46.7985 57.3876 47.5826V98.716C57.3876 98.8728 57.2605 99 57.1036 99H47.253C47.0961 99 46.969 98.8728 46.969 98.716V47.5826Z"
                        fill="#2937B1"
                      />
                    </g>
                    <g filter="url(#filter2_d_231_141)">
                      <path
                        d="M32.4573 74.0012C32.4573 73.217 33.093 72.5814 33.8771 72.5814H41.4561C42.2402 72.5814 42.8759 73.217 42.8759 74.0012V98.716C42.8759 98.8728 42.7487 99 42.5919 99H32.7412C32.5844 99 32.4573 98.8728 32.4573 98.716V74.0012Z"
                        fill="#2937B1"
                      />
                    </g>
                    <g filter="url(#filter3_d_231_141)">
                      <path
                        d="M17.9458 59.8617C17.9458 59.0775 18.5815 58.4419 19.3656 58.4419H26.9446C27.7287 58.4419 28.3644 59.0775 28.3644 59.8617V98.716C28.3644 98.8729 28.2373 99 28.0804 99H18.2298C18.0729 99 17.9458 98.8729 17.9458 98.716V59.8617Z"
                        fill="#2937B1"
                      />
                    </g>
                    <g filter="url(#filter4_d_231_141)">
                      <path
                        d="M3.43408 84.7919C3.43408 84.0077 4.06976 83.3721 4.85391 83.3721H12.4329C13.217 83.3721 13.8527 84.0077 13.8527 84.7919V98.716C13.8527 98.8728 13.7255 99 13.5687 99H3.71805C3.56122 99 3.43408 98.8728 3.43408 98.716V84.7919Z"
                        fill="#2937B1"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_231_141"
                        x="58.0731"
                        y="0.444309"
                        width="18.9377"
                        height="104.519"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="0.851897" dy="1.70379" />
                        <feGaussianBlur stdDeviation="2.12974" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.462745 0 0 0 0 0.556863 0 0 0 0 0.690196 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_141"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_141"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_d_231_141"
                        x="43.5614"
                        y="43.6071"
                        width="18.9377"
                        height="61.3562"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="0.851897" dy="1.70379" />
                        <feGaussianBlur stdDeviation="2.12974" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.462745 0 0 0 0 0.556863 0 0 0 0 0.690196 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_141"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_141"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter2_d_231_141"
                        x="29.0497"
                        y="70.0257"
                        width="18.9377"
                        height="34.9376"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="0.851897" dy="1.70379" />
                        <feGaussianBlur stdDeviation="2.12974" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.462745 0 0 0 0 0.556863 0 0 0 0 0.690196 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_141"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_141"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter3_d_231_141"
                        x="14.5382"
                        y="55.8862"
                        width="18.9377"
                        height="49.0771"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="0.851897" dy="1.70379" />
                        <feGaussianBlur stdDeviation="2.12974" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.462745 0 0 0 0 0.556863 0 0 0 0 0.690196 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_141"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_141"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter4_d_231_141"
                        x="0.0264934"
                        y="80.8164"
                        width="18.9377"
                        height="24.1469"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="0.851897" dy="1.70379" />
                        <feGaussianBlur stdDeviation="2.12974" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.462745 0 0 0 0 0.556863 0 0 0 0 0.690196 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_141"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_141"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <div class="font-weight-bold mb-1">N8,000</div>
                  <div class="text-caption text-grey">Others</div>
                </div>
              </v-card-item>
            </v-card>

            <v-card class="mx-auto text-center rounded-lg py-3" max-width="200">
              <v-card-item>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="118"
                    height="113"
                    viewBox="0 0 118 113"
                    fill="none"
                  >
                    <g filter="url(#filter0_d_231_99)">
                      <path
                        d="M73.5888 105.752V98.4967C88.4491 102.048 97.2221 101.676 113.281 98.4935V105.741C113.281 106.081 113.038 106.377 112.705 106.449C97.2671 109.736 88.6345 109.787 74.1526 106.457C73.8246 106.381 73.5888 106.088 73.5888 105.752Z"
                        fill="#2937B1"
                        stroke="#2937B1"
                        stroke-width="0.131615"
                      />
                      <g filter="url(#filter1_d_231_99)">
                        <ellipse
                          cx="93.4349"
                          cy="98.2229"
                          rx="19.9119"
                          ry="3.63609"
                          fill="#2937B1"
                        />
                        <path
                          d="M113.281 98.2229C113.281 98.4477 113.156 98.6764 112.898 98.9066C112.641 99.1367 112.257 99.3617 111.756 99.5779C110.755 100.01 109.303 100.401 107.503 100.729C103.904 101.386 98.9307 101.793 93.4349 101.793C87.939 101.793 82.9652 101.386 79.3668 100.729C77.5671 100.401 76.1147 100.01 75.1138 99.5779C74.6131 99.3617 74.2291 99.1367 73.9713 98.9066C73.7133 98.6764 73.5888 98.4477 73.5888 98.2229C73.5888 97.9982 73.7133 97.7695 73.9713 97.5392C74.2291 97.3092 74.6131 97.0842 75.1138 96.868C76.1147 96.4359 77.5671 96.0452 79.3668 95.7166C82.9652 95.0595 87.939 94.6527 93.4349 94.6527C98.9307 94.6527 103.904 95.0595 107.503 95.7166C109.303 96.0452 110.755 96.4359 111.756 96.868C112.257 97.0842 112.641 97.3092 112.898 97.5392C113.156 97.7695 113.281 97.9982 113.281 98.2229Z"
                          stroke="white"
                          stroke-opacity="0.2"
                          stroke-width="0.131615"
                        />
                      </g>
                    </g>
                    <g filter="url(#filter2_d_231_99)">
                      <path
                        d="M28.5534 105.752V98.4967C43.4137 102.048 52.1867 101.676 68.2455 98.4935V105.741C68.2455 106.081 68.0029 106.377 67.6691 106.449C52.2317 109.736 43.5991 109.787 29.1172 106.457C28.7892 106.381 28.5534 106.088 28.5534 105.752Z"
                        fill="#2937B1"
                        stroke="#2937B1"
                        stroke-width="0.131615"
                      />
                      <g filter="url(#filter3_d_231_99)">
                        <ellipse
                          cx="48.3995"
                          cy="98.2229"
                          rx="19.9119"
                          ry="3.63609"
                          fill="#2937B1"
                        />
                        <path
                          d="M68.2455 98.2229C68.2455 98.4477 68.121 98.6764 67.863 98.9066C67.6052 99.1367 67.2212 99.3617 66.7205 99.5779C65.7196 100.01 64.2672 100.401 62.4675 100.729C58.8691 101.386 53.8953 101.793 48.3995 101.793C42.9036 101.793 37.9298 101.386 34.3314 100.729C32.5317 100.401 31.0793 100.01 30.0784 99.5779C29.5777 99.3617 29.1937 99.1367 28.9359 98.9066C28.6779 98.6764 28.5534 98.4477 28.5534 98.2229C28.5534 97.9982 28.6779 97.7695 28.9359 97.5392C29.1937 97.3092 29.5777 97.0842 30.0784 96.868C31.0793 96.4359 32.5317 96.0452 34.3314 95.7166C37.9298 95.0595 42.9036 94.6527 48.3995 94.6527C53.8953 94.6527 58.8691 95.0595 62.4675 95.7166C64.2672 96.0452 65.7196 96.4359 66.7205 96.868C67.2212 97.0842 67.6052 97.3092 67.863 97.5392C68.121 97.7695 68.2455 97.9982 68.2455 98.2229Z"
                          stroke="white"
                          stroke-opacity="0.2"
                          stroke-width="0.131615"
                        />
                      </g>
                    </g>
                    <g filter="url(#filter4_d_231_99)">
                      <path
                        d="M73.5888 94.2375V86.9825C88.4491 90.5333 97.2221 90.1615 113.281 86.9792V94.2265C113.281 94.5669 113.038 94.8632 112.705 94.9343C97.2671 98.2215 88.6345 98.2724 74.1526 94.9423C73.8246 94.8669 73.5888 94.5733 73.5888 94.2375Z"
                        fill="#2937B1"
                        stroke="#2937B1"
                        stroke-width="0.131615"
                      />
                      <g filter="url(#filter5_d_231_99)">
                        <ellipse
                          cx="93.4349"
                          cy="86.7087"
                          rx="19.9119"
                          ry="3.63609"
                          fill="#2937B1"
                        />
                        <path
                          d="M113.281 86.7087C113.281 86.9334 113.156 87.1621 112.898 87.3924C112.641 87.6224 112.257 87.8474 111.756 88.0636C110.755 88.4957 109.303 88.8864 107.503 89.215C103.904 89.8721 98.9307 90.2789 93.4349 90.2789C87.939 90.2789 82.9652 89.8721 79.3668 89.215C77.5671 88.8864 76.1147 88.4957 75.1138 88.0636C74.6131 87.8474 74.2291 87.6224 73.9713 87.3924C73.7133 87.1621 73.5888 86.9334 73.5888 86.7087C73.5888 86.4839 73.7133 86.2552 73.9713 86.025C74.2291 85.7949 74.6131 85.5699 75.1138 85.3537C76.1147 84.9216 77.5671 84.5309 79.3668 84.2023C82.9652 83.5452 87.939 83.1384 93.4349 83.1384C98.9307 83.1384 103.904 83.5452 107.503 84.2023C109.303 84.5309 110.755 84.9216 111.756 85.3537C112.257 85.5699 112.641 85.7949 112.898 86.025C113.156 86.2552 113.281 86.4839 113.281 86.7087Z"
                          stroke="white"
                          stroke-opacity="0.2"
                          stroke-width="0.131615"
                        />
                      </g>
                    </g>
                    <g filter="url(#filter6_d_231_99)">
                      <path
                        d="M28.5534 94.2375V86.9825C43.4137 90.5333 52.1867 90.1615 68.2455 86.9792V94.2265C68.2455 94.5669 68.0029 94.8632 67.6691 94.9343C52.2317 98.2215 43.5991 98.2724 29.1172 94.9423C28.7892 94.8669 28.5534 94.5733 28.5534 94.2375Z"
                        fill="#2937B1"
                        stroke="#2937B1"
                        stroke-width="0.131615"
                      />
                      <g filter="url(#filter7_d_231_99)">
                        <ellipse
                          cx="48.3995"
                          cy="86.7087"
                          rx="19.9119"
                          ry="3.63609"
                          fill="#2937B1"
                        />
                        <path
                          d="M68.2455 86.7087C68.2455 86.9334 68.121 87.1621 67.863 87.3924C67.6052 87.6224 67.2212 87.8474 66.7205 88.0636C65.7196 88.4957 64.2672 88.8864 62.4675 89.215C58.8691 89.8721 53.8953 90.2789 48.3995 90.2789C42.9036 90.2789 37.9298 89.8721 34.3314 89.215C32.5317 88.8864 31.0793 88.4957 30.0784 88.0636C29.5777 87.8474 29.1937 87.6224 28.9359 87.3924C28.6779 87.1621 28.5534 86.9334 28.5534 86.7087C28.5534 86.4839 28.6779 86.2552 28.9359 86.025C29.1937 85.7949 29.5777 85.5699 30.0784 85.3537C31.0793 84.9216 32.5317 84.5309 34.3314 84.2023C37.9298 83.5452 42.9036 83.1384 48.3995 83.1384C53.8953 83.1384 58.8691 83.5452 62.4675 84.2023C64.2672 84.5309 65.7196 84.9216 66.7205 85.3537C67.2212 85.5699 67.6052 85.7949 67.863 86.025C68.121 86.2552 68.2455 86.4839 68.2455 86.7087Z"
                          stroke="white"
                          stroke-opacity="0.2"
                          stroke-width="0.131615"
                        />
                      </g>
                      <g filter="url(#filter8_f_231_99)">
                        <ellipse
                          cx="48.6852"
                          cy="86.8558"
                          rx="10.6918"
                          ry="0.822448"
                          fill="#2937B1"
                        />
                      </g>
                    </g>
                    <g filter="url(#filter9_d_231_99)">
                      <path
                        d="M73.5714 82.758V75.503C88.4318 79.0538 97.2048 78.682 113.264 75.4997V82.747C113.264 83.0874 113.021 83.3837 112.687 83.4548C97.2497 86.742 88.6172 86.793 74.1353 83.4628C73.8073 83.3874 73.5714 83.0938 73.5714 82.758Z"
                        fill="#2937B1"
                        stroke="#2937B1"
                        stroke-width="0.131615"
                      />
                      <g filter="url(#filter10_d_231_99)">
                        <ellipse
                          cx="93.4175"
                          cy="75.229"
                          rx="19.9119"
                          ry="3.63609"
                          fill="#2937B1"
                        />
                        <path
                          d="M113.264 75.229C113.264 75.4538 113.139 75.6825 112.881 75.9127C112.623 76.1428 112.239 76.3678 111.739 76.584C110.738 77.0161 109.285 77.4068 107.486 77.7354C103.887 78.3925 98.9133 78.7993 93.4175 78.7993C87.9217 78.7993 82.9479 78.3925 79.3495 77.7354C77.5498 77.4068 76.0974 77.0161 75.0965 76.584C74.5958 76.3678 74.2118 76.1428 73.954 75.9127C73.6959 75.6825 73.5714 75.4538 73.5714 75.229C73.5714 75.0043 73.6959 74.7756 73.954 74.5453C74.2118 74.3153 74.5958 74.0903 75.0965 73.8741C76.0974 73.442 77.5498 73.0513 79.3495 72.7227C82.9479 72.0656 87.9217 71.6588 93.4175 71.6588C98.9133 71.6588 103.887 72.0656 107.486 72.7227C109.285 73.0513 110.738 73.442 111.739 73.8741C112.239 74.0903 112.623 74.3153 112.881 74.5453C113.139 74.7756 113.264 75.0043 113.264 75.229Z"
                          stroke="white"
                          stroke-opacity="0.2"
                          stroke-width="0.131615"
                        />
                      </g>
                    </g>
                    <g filter="url(#filter11_d_231_99)">
                      <path
                        d="M73.5714 71.3129V64.0579C88.4318 67.6088 97.2048 67.237 113.264 64.0546V71.3019C113.264 71.6423 113.021 71.9386 112.687 72.0097C97.2497 75.2969 88.6172 75.3479 74.1353 72.0177C73.8073 71.9423 73.5714 71.6488 73.5714 71.3129Z"
                        fill="#2937B1"
                        stroke="#2937B1"
                        stroke-width="0.131615"
                      />
                      <g filter="url(#filter12_d_231_99)">
                        <ellipse
                          cx="93.4175"
                          cy="63.784"
                          rx="19.9119"
                          ry="3.63609"
                          fill="#2937B1"
                        />
                        <path
                          d="M113.264 63.784C113.264 64.0088 113.139 64.2375 112.881 64.4677C112.623 64.6978 112.239 64.9228 111.739 65.1389C110.738 65.5711 109.285 65.9618 107.486 66.2904C103.887 66.9475 98.9133 67.3543 93.4175 67.3543C87.9217 67.3543 82.9479 66.9475 79.3495 66.2904C77.5498 65.9618 76.0974 65.5711 75.0965 65.1389C74.5958 64.9228 74.2118 64.6978 73.954 64.4677C73.6959 64.2375 73.5714 64.0088 73.5714 63.784C73.5714 63.5593 73.6959 63.3306 73.954 63.1003C74.2118 62.8703 74.5958 62.6453 75.0965 62.4291C76.0974 61.997 77.5498 61.6063 79.3495 61.2777C82.9479 60.6206 87.9217 60.2138 93.4175 60.2138C98.9133 60.2138 103.887 60.6206 107.486 61.2777C109.285 61.6063 110.738 61.997 111.739 62.4291C112.239 62.6453 112.623 62.8703 112.881 63.1003C113.139 63.3306 113.264 63.5593 113.264 63.784Z"
                          stroke="white"
                          stroke-opacity="0.2"
                          stroke-width="0.131615"
                        />
                      </g>
                    </g>
                    <g filter="url(#filter13_d_231_99)">
                      <path
                        d="M26.3532 32.8698C22.0158 33.9897 18.8577 33.9757 13.9379 33.156C13.6154 33.1023 13.3198 33.3499 13.3198 33.6769V73.9446C13.3198 74.2154 13.5253 74.4422 13.795 74.4671C18.0093 74.8563 21.2986 74.8144 26.6037 74.5379C28.015 74.4644 29.4252 74.273 30.8004 73.9471C43.9391 70.8333 51.4798 66.8725 62.0942 57.4529C63.6189 56.0998 65.3571 54.9632 67.3302 54.4511C70.8464 53.5385 73.7882 53.6415 78.4031 55.0501C78.9173 55.207 79.4447 54.8274 79.4447 54.2898V14.0563C79.4447 13.6403 79.1166 13.2951 78.7014 13.2693C66.083 12.4851 60.7415 13.3762 51.4022 16.4327C42.5341 19.6575 38.1413 22.8587 30.4744 30.439C29.3216 31.5788 27.9229 32.4645 26.3532 32.8698Z"
                        fill="#2937B1"
                      />
                      <path
                        d="M26.3532 32.8698C22.0158 33.9897 18.8577 33.9757 13.9379 33.156C13.6154 33.1023 13.3198 33.3499 13.3198 33.6769V73.9446C13.3198 74.2154 13.5253 74.4422 13.795 74.4671C18.0093 74.8563 21.2986 74.8144 26.6037 74.5379C28.015 74.4644 29.4252 74.273 30.8004 73.9471C43.9391 70.8333 51.4798 66.8725 62.0942 57.4529C63.6189 56.0998 65.3571 54.9632 67.3302 54.4511C70.8464 53.5385 73.7882 53.6415 78.4031 55.0501C78.9173 55.207 79.4447 54.8274 79.4447 54.2898V14.0563C79.4447 13.6403 79.1166 13.2951 78.7014 13.2693C66.083 12.4851 60.7415 13.3762 51.4022 16.4327C42.5341 19.6575 38.1413 22.8587 30.4744 30.439C29.3216 31.5788 27.9229 32.4645 26.3532 32.8698Z"
                        stroke="#2937B1"
                        stroke-width="0.263229"
                      />
                    </g>
                    <g filter="url(#filter14_d_231_99)">
                      <circle
                        cx="71.8282"
                        cy="45.6869"
                        r="2.59652"
                        fill="#2937B1"
                      />
                    </g>
                    <g filter="url(#filter15_d_231_99)">
                      <circle
                        cx="20.5899"
                        cy="41.5324"
                        r="2.59652"
                        fill="#2937B1"
                      />
                    </g>
                    <g filter="url(#filter16_dd_231_99)">
                      <circle
                        cx="46.2091"
                        cy="43.6096"
                        r="11.5978"
                        fill="url(#paint0_linear_231_99)"
                        shape-rendering="crispEdges"
                      />
                    </g>
                    <g filter="url(#filter17_d_231_99)">
                      <path
                        d="M42.5517 38.1027C42.9854 37.6071 43.3923 37.1813 43.8688 36.7184C44.4021 36.2003 45.2463 36.1999 45.799 36.6974C46.2285 37.0839 46.3019 37.7382 45.9405 38.189C45.7124 38.4735 45.4948 38.7198 45.2511 38.9588C44.7902 39.4109 44.4781 40.0059 44.4781 40.6516V40.7275C44.4781 41.3177 44.8377 41.852 45.3917 42.0555C45.4888 42.0912 45.5831 42.1252 45.6752 42.1577C47.0325 42.6366 48.4769 43.0322 49.5199 44.024C49.6543 44.1518 49.7816 44.2842 49.9052 44.4245C50.4901 45.0886 50.7098 45.9843 50.7098 46.8692C50.7098 47.9009 50.4102 48.9296 49.7223 49.6985C49.2611 50.214 48.8001 50.63 48.2331 51.0564C47.6874 51.4668 46.9188 51.3435 46.4864 50.815C46.0394 50.2686 46.0968 49.4683 46.6172 48.9913L47.2542 48.4074C47.5883 48.1011 47.8434 47.7031 47.8811 47.2515C47.8833 47.2259 47.8851 47.2004 47.8867 47.175C47.9376 46.3487 47.3099 45.667 46.5574 45.3219C45.5613 44.8651 44.7043 44.4326 43.7301 43.8971C42.4507 43.1937 41.5883 41.966 41.6315 40.5066C41.6569 39.6524 41.9889 38.7458 42.5517 38.1027Z"
                        fill="#2937B1"
                      />
                      <path
                        d="M42.6012 38.146C43.0336 37.6519 43.4393 37.2274 43.9146 36.7656C44.4221 36.2726 45.227 36.2711 45.755 36.7463C46.1602 37.111 46.2274 37.726 45.8892 38.1478C45.6623 38.4308 45.4464 38.6751 45.2051 38.9118C44.7347 39.3731 44.4123 39.9841 44.4123 40.6516V40.7275C44.4123 41.3442 44.7881 41.9039 45.369 42.1173C45.4664 42.1531 45.5609 42.1871 45.6533 42.2197C45.8357 42.2841 46.0193 42.3469 46.2028 42.4096C47.3925 42.8164 48.5821 43.2231 49.4746 44.0717C49.6075 44.1982 49.7335 44.3291 49.8558 44.468C50.4266 45.116 50.644 45.9938 50.644 46.8692C50.644 47.889 50.3478 48.9006 49.6733 49.6546C49.2152 50.1666 48.7574 50.5798 48.1936 51.0038C47.6784 51.3913 46.9493 51.2767 46.5374 50.7733C46.1125 50.254 46.167 49.4932 46.6616 49.0398L47.2987 48.4559C47.6404 48.1426 47.9072 47.7303 47.9467 47.257C47.9489 47.2309 47.9508 47.205 47.9524 47.179C48.0057 46.3142 47.3497 45.6128 46.5848 45.2621C45.5903 44.806 44.7347 44.3742 43.7618 43.8394C42.4993 43.1453 41.6549 41.9383 41.6973 40.5086C41.7222 39.6684 42.0492 38.7768 42.6012 38.146Z"
                        stroke="white"
                        stroke-opacity="0.33"
                        stroke-width="0.131615"
                      />
                      <rect
                        x="47.4209"
                        y="34.0891"
                        width="2.76963"
                        height="6.23166"
                        rx="1.38481"
                        fill="#2937B1"
                      />
                      <rect
                        x="47.4867"
                        y="34.1549"
                        width="2.63801"
                        height="6.10005"
                        rx="1.31901"
                        stroke="white"
                        stroke-opacity="0.33"
                        stroke-width="0.131615"
                      />
                      <rect
                        x="42.2278"
                        y="47.2448"
                        width="2.76963"
                        height="6.23166"
                        rx="1.38481"
                        fill="#2937B1"
                      />
                      <rect
                        x="42.2936"
                        y="47.3106"
                        width="2.63801"
                        height="6.10005"
                        rx="1.31901"
                        stroke="white"
                        stroke-opacity="0.33"
                        stroke-width="0.131615"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_231_99"
                        x="72.47"
                        y="93.7972"
                        width="44.5619"
                        height="19.1512"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="1.31615" dy="1.57937" />
                        <feGaussianBlur stdDeviation="1.18453" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.228976 0 0 0 0 0.34229 0 0 0 0 0.504167 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_99"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_99"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_d_231_99"
                        x="71.4171"
                        y="93.2707"
                        width="44.0354"
                        height="11.4838"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="0.789687" />
                        <feGaussianBlur stdDeviation="1.05292" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.6825 0 0 0 0 0.782885 0 0 0 0 0.9 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_99"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_99"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter2_d_231_99"
                        x="27.4346"
                        y="93.7972"
                        width="44.5619"
                        height="19.1512"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="1.31615" dy="1.57937" />
                        <feGaussianBlur stdDeviation="1.18453" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.228976 0 0 0 0 0.34229 0 0 0 0 0.504167 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_99"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_99"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter3_d_231_99"
                        x="26.3817"
                        y="93.2707"
                        width="44.0354"
                        height="11.4838"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="0.789687" />
                        <feGaussianBlur stdDeviation="1.05292" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.6825 0 0 0 0 0.782885 0 0 0 0 0.9 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_99"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_99"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter4_d_231_99"
                        x="72.47"
                        y="82.2829"
                        width="44.5619"
                        height="19.1512"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="1.31615" dy="1.57937" />
                        <feGaussianBlur stdDeviation="1.18453" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.228976 0 0 0 0 0.34229 0 0 0 0 0.504167 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_99"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_99"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter5_d_231_99"
                        x="71.4171"
                        y="81.7564"
                        width="44.0354"
                        height="11.4838"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="0.789687" />
                        <feGaussianBlur stdDeviation="1.05292" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.6825 0 0 0 0 0.782885 0 0 0 0 0.9 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_99"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_99"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter6_d_231_99"
                        x="27.4346"
                        y="82.2829"
                        width="44.5619"
                        height="19.1512"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="1.31615" dy="1.57937" />
                        <feGaussianBlur stdDeviation="1.18453" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.228976 0 0 0 0 0.34229 0 0 0 0 0.504167 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_99"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_99"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter7_d_231_99"
                        x="26.3817"
                        y="81.7564"
                        width="44.0354"
                        height="11.4838"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="0.789687" />
                        <feGaussianBlur stdDeviation="1.05292" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.6825 0 0 0 0 0.782885 0 0 0 0 0.9 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_99"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_99"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter8_f_231_99"
                        x="32.7288"
                        y="80.7687"
                        width="31.9127"
                        height="12.1741"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="2.63229"
                          result="effect1_foregroundBlur_231_99"
                        />
                      </filter>
                      <filter
                        id="filter9_d_231_99"
                        x="72.4527"
                        y="70.8033"
                        width="44.5619"
                        height="19.1513"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="1.31615" dy="1.57937" />
                        <feGaussianBlur stdDeviation="1.18453" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.228976 0 0 0 0 0.34229 0 0 0 0 0.504167 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_99"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_99"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter10_d_231_99"
                        x="71.3998"
                        y="70.2768"
                        width="44.0354"
                        height="11.4838"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="0.789687" />
                        <feGaussianBlur stdDeviation="1.05292" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.6825 0 0 0 0 0.782885 0 0 0 0 0.9 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_99"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_99"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter11_d_231_99"
                        x="72.4527"
                        y="59.3583"
                        width="44.5619"
                        height="19.1513"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="1.31615" dy="1.57937" />
                        <feGaussianBlur stdDeviation="1.18453" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.228976 0 0 0 0 0.34229 0 0 0 0 0.504167 0 0 0 0.15 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_99"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_99"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter12_d_231_99"
                        x="71.3998"
                        y="58.8318"
                        width="44.0354"
                        height="11.4839"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="0.789687" />
                        <feGaussianBlur stdDeviation="1.05292" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.6825 0 0 0 0 0.782885 0 0 0 0 0.9 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_99"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_99"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter13_d_231_99"
                        x="0.29001"
                        y="0.759843"
                        width="97.9754"
                        height="93.603"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="2.89552" dy="3.68521" />
                        <feGaussianBlur stdDeviation="7.89687" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.386111 0 0 0 0 0.465605 0 0 0 0 0.579167 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_99"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_99"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter14_d_231_99"
                        x="68.1788"
                        y="42.5639"
                        width="7.29895"
                        height="7.29889"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="0.526458" />
                        <feGaussianBlur stdDeviation="0.526458" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_99"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_99"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter15_d_231_99"
                        x="16.9405"
                        y="38.4095"
                        width="7.29895"
                        height="7.29889"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="0.526458" />
                        <feGaussianBlur stdDeviation="0.526458" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_99"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_99"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter16_dd_231_99"
                        x="29.3467"
                        y="28.3266"
                        width="32.6718"
                        height="31.6189"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="-2.63229" dy="-1.05292" />
                        <feGaussianBlur stdDeviation="1.31615" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_99"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dx="0.526458" dy="1.05292" />
                        <feGaussianBlur stdDeviation="1.8426" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.348958 0 0 0 0 0.462623 0 0 0 0 0.625 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_dropShadow_231_99"
                          result="effect2_dropShadow_231_99"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_231_99"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter17_d_231_99"
                        x="40.0505"
                        y="33.5627"
                        width="12.2386"
                        height="22.5461"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="1.05292" />
                        <feGaussianBlur stdDeviation="0.789687" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_231_99"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_231_99"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_231_99"
                        x1="46.2091"
                        y1="32.0118"
                        x2="46.2091"
                        y2="55.2075"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E4EBF7" stop-opacity="0.5" />
                        <stop offset="1" stop-color="#D9E4F4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div class="font-weight-bold mb-1">N120,000</div>
                  <div class="text-caption text-grey">Total Paid</div>
                </div>
              </v-card-item>
            </v-card>
          </section>

          <!-- enrolled courses -->
          <section>
            <p class="py-8 font-weight-bold">Enrolled Course</p>
            <section
              class="enrolled bg-deep-purple-lighten-4 rounded-lg d-flex py-3 px-6 justify-space-between"
            >
              <div class="d-flex flex-column justify-space-between">
                <div class="text-myPurple font-weight-bold">
                  Web Development
                </div>
                <div
                  class="bg-myPurple rounded-pill mx-auto px-5 py-1 font-weight-bold"
                >
                  6 Months
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="93"
                  height="75"
                  viewBox="0 0 93 75"
                  fill="none"
                >
                  <g style="mix-blend-mode: overlay">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.59272 5.86824L3.21463 63.4654C2.39741 63.4521 0.766246 63.7603 0.779336 65.1004C0.792427 66.4404 0.776194 68.8242 0.766441 69.8486C0.725843 70.1072 0.810641 70.7032 1.47461 71.0188C2.13859 71.3345 4.6033 72.6868 5.75266 73.3235C6.11568 73.5825 7.12579 74.0977 8.26203 74.0866C8.71096 74.0822 16.4201 74.0291 26.7793 73.9578C49.1938 73.8034 84.0153 73.5637 84.5451 73.5469C84.6901 73.5423 84.845 73.5442 85.0079 73.5461C85.715 73.5545 86.5729 73.5647 87.4272 73.0584C88.0611 72.6828 89.0681 72.0152 89.8602 71.4901C90.3816 71.1444 90.8098 70.8605 90.977 70.7624C91.077 70.7036 91.1775 70.6437 91.2762 70.5848C91.5932 70.3958 91.8932 70.2169 92.1092 70.1196L92.1323 70.1092C92.4236 69.9786 92.987 69.726 92.9784 68.8407C92.9712 68.1132 92.8815 65.558 92.8375 64.3713C92.6811 63.7619 92.0005 62.5468 90.5289 62.5611C90.0708 62.5656 89.8263 62.4083 89.8225 62.0266C89.8188 61.6448 89.8524 57.1444 89.8639 56.6563C89.8754 56.1683 89.9247 51.8762 89.9215 50.8349C89.9204 50.4833 89.9275 49.1243 89.9365 47.4152C89.9541 44.0622 89.9787 39.3618 89.9622 38.2785C89.9374 36.6432 89.8246 26.0038 89.8303 24.7681C89.836 23.5324 89.8024 14.6346 89.7905 13.4169C89.7786 12.1991 89.5996 6.61841 89.5629 5.58761C89.5262 4.55681 89.0952 0.893354 84.7959 0.935353C81.3565 0.968951 67.5853 1.07079 61.1297 1.1175L10.6117 1.61099C9.75607 1.61012 7.83144 1.61601 6.97837 1.64649C5.91203 1.68459 4.87355 1.84576 3.92428 2.94841C2.97501 4.05107 2.58057 4.62389 2.59272 5.86824ZM10.8091 12.5083L11.1448 46.8699C11.1327 47.2585 11.1885 48.1064 11.5079 48.3896C11.9071 48.7435 12.0708 48.8503 13.1224 48.84C13.4949 48.8364 17.0696 48.7899 21.5503 48.7317C29.7207 48.6255 40.9036 48.4802 41.177 48.4839C41.6003 48.4897 71.1913 48.2294 72.1129 48.2204C72.6618 48.215 74.8908 48.2442 76.7579 48.2685C78.0255 48.2851 79.1263 48.2995 79.421 48.2994C80.15 48.2992 81.9719 47.9506 81.9595 46.6821C81.9496 45.6673 81.7652 22.9698 81.6742 11.7479C81.7111 11.2639 81.4657 10.2991 80.1885 10.3116C79.9367 10.314 78.8491 10.3252 77.1885 10.3422C68.3196 10.433 43.1062 10.6913 41.58 10.6887C40.7271 10.6872 35.2083 10.7465 29.3918 10.8089C22.8528 10.879 15.9375 10.9532 14.8531 10.9498C13.2538 10.9447 12.409 10.9646 11.9657 10.975C11.841 10.9779 11.7481 10.9801 11.6791 10.9808C11.673 10.9809 11.6668 10.9809 11.6606 10.981C11.3482 10.9838 10.9363 10.9875 10.8716 11.5622C10.8056 12.1484 10.807 12.2882 10.8091 12.5083Z"
                      fill="#2937B1"
                    />
                  </g>
                </svg>
              </div>
            </section>
          </section>
        </section>
      </v-app>
    </section>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.enrolled {
  border: 2px solid #2937b1;
}
</style>
