import React from "react";
import { Box, Accordion } from "@chakra-ui/react";
import NavItem from "./NavItem";
import NavDivider from "./NavDivider";
import NavItemAccordion from "./NavItemAccordion";
import {
    HiOutlineChartPie,
    HiOutlinePencil,
    HiOutlineDocument,
    HiOutlineSpeakerphone,
    HiOutlineChartBar,
    HiOutlineChat,
    HiOutlineClock,
    HiOutlineStar,
    HiOutlineLink,
    HiOutlineTag,
    HiOutlineMenuAlt1,
    HiOutlineUser,
    HiOutlineInformationCircle,
    HiOutlineChevronDoubleRight,
    HiOutlineLockClosed,
    HiOutlineUsers,
} from "react-icons/hi";
import { InertiaLink } from "@inertiajs/inertia-react";

const Nav = () => (
    <Box as="nav">
        <Accordion allowMultiple>
            <NavItem
                href="/"
                text="Visão geral"
                icon={<HiOutlineChartPie />}
            />

            <NavDivider>Conteúdo</NavDivider>

            <NavItem
                href="/post"
                text="Postagens"
                icon={<HiOutlinePencil />}
            />

            <NavItemAccordion text="Páginas" icon={<HiOutlineDocument />}>
                <InertiaLink href="">Notícias</InertiaLink>
                <InertiaLink href="">Contato</InertiaLink>
                <InertiaLink href="">Expediente</InertiaLink>
                <InertiaLink href="">Vídeos</InertiaLink>
                <InertiaLink href="">Coluna 1</InertiaLink>
                <InertiaLink href="">Coluna 2</InertiaLink>
                <InertiaLink href="">Coluna 3</InertiaLink>
                <InertiaLink href="">Galeria de fotos</InertiaLink>
                <InertiaLink href="">Enquetes</InertiaLink>
                <InertiaLink href="">Lojinha</InertiaLink>
                <InertiaLink href="">Promoções</InertiaLink>
                <InertiaLink href="">Mural de anúncio</InertiaLink>
            </NavItemAccordion>
            <NavItem href="" text="Banners" icon={<HiOutlineSpeakerphone />} />
            <NavItem href="" text="Enquete" icon={<HiOutlineChartBar />} />

            <NavDivider>Gerenciamento</NavDivider>

            <NavItem href="" text="Comentários" icon={<HiOutlineChat />} />
            <NavItem href="" text="Agendamentos" icon={<HiOutlineClock />} />

            <NavItem
                href=""
                text="Destaques da capa"
                icon={<HiOutlineStar />}
            />
            <NavItem
                href=""
                text="Posts relacionados"
                icon={<HiOutlineLink />}
            />
            <NavItem href="/category" text="Categorias" icon={<HiOutlineTag />} />
            <NavItem href="" text="Autores" icon={<HiOutlineUsers />} />
            <NavItem href="" text="Menus" icon={<HiOutlineMenuAlt1 />} />

            <NavDivider>Contas</NavDivider>

            <NavItem
                href="/user"
                text="Usuários Dash"
                icon={<HiOutlineLockClosed />}
            />
            <NavItem href="" text="Usuários Site" icon={<HiOutlineUser />} />

            <NavDivider>Ferramentas</NavDivider>

            <NavItem
                href=""
                text="Logs"
                icon={<HiOutlineInformationCircle />}
            />
            <NavItem
                href=""
                text="Filas"
                icon={<HiOutlineChevronDoubleRight />}
            />
        </Accordion>
    </Box>
);

export default Nav;
