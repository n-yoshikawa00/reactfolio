const Contact = () => (
  <>
    <div
      id="contact"
      className="container mt-52 mb-20 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
      <section className="w-full">
        <h2 className="secondary-title">お問い合わせ</h2>
        <p className="section-paragraph">
          お問い合わせは下記のフォームからお願いいたします。
          <br />
          <span className="text-red-700"> * </span>は必ず入力してください。
        </p>
        <div className="w-full lg:grid-cols-2 gap-8 lg:gap-32 mt-16">
          <form id="contactForm" className="space-y-12" action="" method="POST">
            <div>
              <label
                className="text-black block mb-6 text-xl font-bold"
                for="type"
              >
                お問い合わせの種類<span className="text-red-700"> *</span>
              </label>
              <select
                id="type"
                className="rounded-md w-full border-black bg-white pw-4 py-4"
              >
                <option value="" selected>
                  選択してください
                </option>
                <option>当サイトの内容について</option>
                <option>経歴について</option>
                <option>その他</option>
              </select>
              <div id="typeError" className="text-red-700"></div>
            </div>
            <div>
              <label className="text-black block mb-6 text-xl font-bold">
                お名前<span className="text-red-700"> *</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="田中　太郎"
                className="rounded-md w-full border-black bg-white pw-4 py-4"
              >
                <div id="nameError" className="text-red-700"></div>
              </input>
            </div>
            <div>
              <label className="text-black block mb-6 text-xl font-bold">
                メールアドレス<span className="text-red-700"> *</span>
              </label>
              <input
                id="email"
                type="text"
                placeholder="tanaka@example.com"
                className="rounded-md w-full  border-black bg-white pw-4 py-4"
              >
                <div id="emailError" className="text-red-700"></div>
              </input>
            </div>
            <div>
              <label className="text-black block mb-6 text-xl font-bold">
                電話番号
              </label>
              <input
                id="phone"
                type="text"
                placeholder="00000000000"
                className="rounded-md w-full  border-black bg-white pw-4 py-4"
              >
                <div id="phoneError" className="text-red-700"></div>
              </input>
            </div>
            <div>
              <label className="text-black block mb-6 text-xl font-bold">
                メッセージ<span className="text-red-700"> *</span>
              </label>
              <input
                id="message"
                type="text"
                placeholder="こちらにお問い合わせ内容を入力してください"
                className="rounded-md w-full  border-black bg-white pw-4 py-4"
              >
                <div id="messageError" className="text-red-700"></div>
              </input>
            </div>
            <div className="flex justify-between">
              <button
                id="submitButton"
                type="submit"
                className="font-bold hover:text-selectedText transition-all duration-300"
              >
                送信
              </button>
              <button
                id="clearButton"
                type="reset"
                className="font-bold hover:text-selectedText transition-all duration-300"
              >
                クリア
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </>
);