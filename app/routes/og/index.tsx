import type { LoaderFunction } from "@remix-run/node";
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export const loader: LoaderFunction = async () => {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "black",
          padding: "16px",
          height: "100%",
        }}
      >
        <div
          style={{
            background: "black",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "32px",
              background: "#363d4a",
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
            }}
          >
            <div style={{ display: "flex", gap: "8px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#FF605C",
                }}
              ></div>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#FFBD44",
                }}
              ></div>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#00CA4E",
                }}
              ></div>
            </div>

            <div
              style={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#007a4c",
                fontSize: "24px",
                fontWeight: 400,
              }}
            >
              kevfaveri@MBP
            </div>
          </div>
          <div
            style={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              color: "white",
              fontSize: "32px",
              backgroundColor: "#252a33",
              borderBottomLeftRadius: "16px",
              borderBottomRightRadius: "16px",
              padding: "0 20px",
            }}
          >
            <div style={{ display: "flex", width: "250px", position: 'absolute', top: '120px', marginLeft: '20px' }}>
              <img
                src="https://kevin.faveri.dev/kevfaveri.jpeg"
                alt="Kevin Faveri web3"
                style={{
                  width: "350px",
                  marginRight: "20px",
                  borderRadius: "8px",
                  position: "absolute",
                  zIndex: 1,
                  top: "10%",
                }}
              />
              <img
                src="https://kevin.faveri.dev/kevverde.jpg"
                alt="Kevin Faveri"
                style={{
                  width: "250px",
                  marginRight: "20px",
                  borderRadius: "8px",
                  position: "absolute",
                  zIndex: 2,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "380px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    color: "#007a4c",
                  }}
                >
                  ~/projects/old/work/portfolio
                </div>
                <div
                  style={{
                    marginLeft: "8px",
                    color: "#eab308",
                  }}
                >
                  about
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center",
                  color: "#eab308",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
              >
                Software Engineer with 9+ years of experience.
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "20px",
                }}
              >
                <img
                  src="https://kevin.faveri.dev/logos/rust-logo.png"
                  alt="Rust Logo"
                  style={{
                    height: "32px",
                    marginRight: "10px",
                  }}
                />
                <img
                  src="https://kevin.faveri.dev/logos/react-logo.png"
                  alt="React Logo"
                  style={{
                    height: "32px",
                    marginRight: "10px",
                  }}
                />
                <img
                  src="https://kevin.faveri.dev/logos/node-logo.png"
                  alt="Node Logo"
                  style={{
                    height: "32px",
                    marginRight: "10px",
                  }}
                />
                <img
                  src="https://kevin.faveri.dev/logos/btc-logo.png"
                  alt="BTC Logo"
                  style={{
                    height: "32px",
                    marginRight: "10px",
                  }}
                />
                <img
                  src="https://kevin.faveri.dev/logos/solana-logo.png"
                  alt="Solana Logo"
                  style={{
                    height: "32px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
};
