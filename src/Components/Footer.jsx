export default function Footer() {
  return (
    <div className="mt-6">
      <div className="flex flex-col justify-center items-center bg-[#070952] text-white p-6">
        <div className="flex flex-col items-center justify-center gap-4 bg-[#010246] p-4 w-4/5 border-t-green-500 border-t-4">
          <p className="text-white font-medium text-3xl">
            Microsoft Innovations Club
          </p>
          <p>
            “Technology is best when it brings people together.” - Matt
            Mullenweg
          </p>
          <div>
            <p>VIT Chennai ,Kelambakkam - Vandalur Rd</p>
            <p>Chennai, Tamil Nadu 600127</p>
          </div>
          <p>
            <b>Email</b>: micvitcc@gmail.com
          </p>
          <div className="flex fkex-wrap gap-4">
            <a
              href="https://discord.gg/c6EAayHHR3"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <i class="fa-brands fa-discord hover:bg-green-500 p-3 rounded-full transition duration-300"></i>
            </a>
            <a
              href="https://www.instagram.com/microsoft.innovations.vitc/"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <i class="fa-brands fa-instagram hover:bg-green-500 p-3 rounded-full transition duration-300"></i>
            </a>

            <a
              href="https://www.linkedin.com/company/microsoft-innovations-club-vitc/"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <i class="fa-brands fa-linkedin-in hover:bg-green-500 p-3 rounded-full transition duration-300"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
