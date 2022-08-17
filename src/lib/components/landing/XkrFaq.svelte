<script>
    import {Accordion, AccordionItem} from "svelte-collapsible";
    import ArrowDown from "../icons/ArrowDown.svelte";


    const faq = [
        {id: 1, question: 'Get Kryptokrona', answer: 'Answer 1'},
        {id: 2, question: 'Question 2', answer: 'Answer 2'},
        {id: 3, question: 'Question 3', answer: 'Answer 3'}
    ]
</script>

<div class="faq">
        <Accordion>
            {#each faq as item}

                <AccordionItem key={item.id}>
                    <div slot="header" class="question">
                        <h2>{item.question}</h2>
                        <ArrowDown/>
                    </div>
                    <div slot='body' class="answer">
                        <p>{item.answer}</p>
                    </div>
                </AccordionItem>

            {/each}
        </Accordion>

</div>

<style lang="scss">


</style>